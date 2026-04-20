import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isTrPath = pathname === "/tr" || pathname.startsWith("/tr/");
  const locale = isTrPath ? "tr" : "en";

  const res = NextResponse.next();
  // Expose locale to server components via a custom response header
  res.headers.set("x-locale", locale);

  // Gentle Accept-Language redirect — only fires on the root homepage for
  // first-time visitors whose primary language is Turkish.
  if (pathname === "/") {
    const hasPref = req.cookies.has("locale-preference");
    if (!hasPref) {
      const acceptLang = req.headers.get("accept-language") ?? "";
      const firstTag = acceptLang.split(",")[0]?.split(";")[0]?.trim().toLowerCase() ?? "";
      if (firstTag === "tr" || firstTag.startsWith("tr-")) {
        const redirectRes = NextResponse.redirect(new URL("/tr", req.url));
        redirectRes.headers.set("x-locale", "tr");
        redirectRes.cookies.set("locale-preference", "tr", {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          sameSite: "lax",
          path: "/",
        });
        return redirectRes;
      }
    }
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|api/).*)"],
};
