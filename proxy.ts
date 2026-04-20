import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isTrPath = pathname === "/tr" || pathname.startsWith("/tr/");
  const locale = isTrPath ? "tr" : "en";

  // Clone request headers and inject x-locale so server components can read it
  // via `headers()` from next/headers (which reads REQUEST headers, not response headers).
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", locale);

  // Gentle Accept-Language redirect — only fires on the root homepage for
  // first-time visitors whose primary language is Turkish.
  if (pathname === "/") {
    const hasPref = req.cookies.has("locale-preference");
    if (!hasPref) {
      const acceptLang = req.headers.get("accept-language") ?? "";
      const firstTag = acceptLang.split(",")[0]?.split(";")[0]?.trim().toLowerCase() ?? "";
      if (firstTag === "tr" || firstTag.startsWith("tr-")) {
        const redirectRes = NextResponse.redirect(new URL("/tr", req.url));
        redirectRes.cookies.set("locale-preference", "tr", {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          sameSite: "lax",
          path: "/",
        });
        return redirectRes;
      }
    }
  }

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|api/).*)"],
};
