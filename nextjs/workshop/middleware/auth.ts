import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Authentication middleware
export function authMiddleware(request: NextRequest) {
  const url = request.nextUrl;

  // Middleware applies only to /admin
  if (url.pathname.startsWith("/admin")) {
    // Check if the query parameter ?token exists and is valid
    const token = url.searchParams.get("token");

    if (token !== "dummyToken") {
      // Redirect to the login page if token is missing or invalid
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return null; // No redirect, allow the request
}
