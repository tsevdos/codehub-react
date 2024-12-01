import type { NextRequest } from "next/server";

// Log middleware
export function loggingMiddleware(request: NextRequest) {
  console.log({ Request: request });
}
