import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const protectedPaths = ["/export"];
  const isProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  console.log("Middleware triggered for:", req.nextUrl.pathname);

  if (isProtected) {
    try {
      const verifyRes = await fetch("http://localhost:4000/api/auth/verify", {
        headers: {
          cookie: req.headers.get("cookie") || "",
        },
      });

      if (!verifyRes.ok) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
      }
    } catch (err) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/export/:path*"],
};
