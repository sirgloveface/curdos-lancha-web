import { NextRequest, NextResponse } from "next/server";

const SPANISH_COUNTRIES = ["AR", "UY", "CL", "PY", "ES", "BO", "PE", "CO", "MX"];

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const savedLocale = req.cookies.get("NEXT_LOCALE")?.value;

  if (!savedLocale) {
    const geoCountry = req.headers.get("x-vercel-ip-country") || req.headers.get("cf-ipcountry") || "";
    const acceptLang = req.headers.get("accept-language") || "";

    const isSpanish =
      SPANISH_COUNTRIES.includes(geoCountry.toUpperCase()) ||
      acceptLang.toLowerCase().startsWith("es") ||
      acceptLang.toLowerCase().includes(",es");

    const detected = isSpanish ? "es" : "pt";
    res.cookies.set("NEXT_LOCALE", detected, { path: "/", maxAge: 60 * 60 * 24 * 30 });
    res.headers.set("x-locale", detected);
  }

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|models).*)"],
};

