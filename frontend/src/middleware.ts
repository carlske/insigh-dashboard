import { API_URL } from "@/config/settings";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const protectedPaths = ["/dashboard"];
  const isProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtected) {
    try {
      const verifyRes = await fetch(`${API_URL}/auth/verify`, {
        headers: {
          cookie: req.headers.get("cookie") || "",
        },
      });

      if (!verifyRes.ok) {
        url.pathname = "/auth/login";
        return NextResponse.redirect(url);
      }
    } catch (err) {
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
