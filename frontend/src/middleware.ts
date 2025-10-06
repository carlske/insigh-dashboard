import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = request.nextUrl.pathname;

  // Define protected routes
  const protectedPaths = ["/export", "/dashboard", "/admin"];

  const isProtectedRoute = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  console.log("🔒 Middleware checking:", pathname);

  if (isProtectedRoute) {
    try {
      // Use environment variable for backend URL
      const backendUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

      const verifyResponse = await fetch(`${backendUrl}/api/auth/verify`, {
        method: "GET",
        headers: {
          Cookie: request.headers.get("cookie") || "",
          "Content-Type": "application/json",
        },
        signal: AbortSignal.timeout(5000),
      });

      console.log("🔍 Auth verify response status:", verifyResponse.status);

      if (!verifyResponse.ok) {
        console.log("❌ Authentication failed, redirecting to auth/login");
        url.pathname = "/auth";
        return NextResponse.redirect(url);
      }

      // Optional: Parse and log user data
      try {
        const userData = await verifyResponse.json();
      } catch (parseError) {
        console.warn("⚠️ Failed to parse user data from verify response");
      }
    } catch (error) {
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)"],
};
