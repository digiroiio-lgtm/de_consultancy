import { NextRequest, NextResponse } from "next/server";

// Bot user-agent pattern — these crawlers must never be redirected so both
// language versions remain independently crawlable by search engines.
const BOT_UA_PATTERN =
  /bot|crawl|spider|slurp|mediapartners|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegram|prerender/i;

const COOKIE_NAME = "locale-preference";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function isTurkishAcceptLanguage(acceptLang: string): boolean {
  const firstTag = acceptLang.split(",")[0]?.split(";")[0]?.trim().toLowerCase() ?? "";
  return firstTag === "tr" || firstTag.startsWith("tr-");
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Inject x-locale header so server components can read it via headers().
  const isTrPath = pathname === "/tr" || pathname.startsWith("/tr/");
  const locale = isTrPath ? "tr" : "en";
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", locale);

  // 2. Skip all redirect logic for search-engine bots. Both /en and /tr must
  //    be independently crawlable; redirecting bots would collapse them into
  //    a single indexable version.
  const ua = req.headers.get("user-agent") ?? "";
  if (BOT_UA_PATTERN.test(ua)) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // 3. Only auto-redirect on the root path "/". Sub-paths are already locale-
  //    specific (/tr/... = TR, everything else = EN) so no action needed.
  if (pathname === "/") {
    // Priority 1 – explicit user preference stored in cookie.
    const cookiePref = req.cookies.get(COOKIE_NAME)?.value;
    if (cookiePref === "tr") {
      return NextResponse.redirect(new URL("/tr", req.url));
    }
    if (cookiePref === "en") {
      // User deliberately chose English; respect that, don't redirect.
      return NextResponse.next({ request: { headers: requestHeaders } });
    }

    // Priority 2 – Vercel geo header (country = TR).
    const country = (req.headers.get("x-vercel-ip-country") ?? "").toUpperCase();
    if (country === "TR") {
      const res = NextResponse.redirect(new URL("/tr", req.url));
      res.cookies.set(COOKIE_NAME, "tr", {
        maxAge: COOKIE_MAX_AGE,
        sameSite: "lax",
        path: "/",
      });
      return res;
    }

    // Priority 3 – Browser Accept-Language header signals Turkish preference.
    const acceptLang = req.headers.get("accept-language") ?? "";
    if (isTurkishAcceptLanguage(acceptLang)) {
      const res = NextResponse.redirect(new URL("/tr", req.url));
      res.cookies.set(COOKIE_NAME, "tr", {
        maxAge: COOKIE_MAX_AGE,
        sameSite: "lax",
        path: "/",
      });
      return res;
    }

    // Priority 4 – Default: serve English, no redirect.
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|api/).*)"],
};
