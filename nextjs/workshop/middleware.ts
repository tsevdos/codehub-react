import { authMiddleware } from "./middleware/auth";
import { loggingMiddleware } from "./middleware/logging";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authResponse = authMiddleware(request);
  if (authResponse) return authResponse;

  loggingMiddleware(request);

  // Allow request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
