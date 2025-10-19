// Imports
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// Types
import { ApiResponse } from "./types";

// Routes
// auth required routes
const protectedRoutes = [
  "/api/add/tag",
  "/api/add/place",
  "/api/fetch/place-details",
  "/api/fetch/place-suggestion",
  "/api/fetch/tags-suggestion",
  "/api/fetch/user-data",
];

//
export async function middleware(request: NextRequest) {
  //
  if (!process.env.NEXTAUTH_SECRET) {
    console.error("NEXTAUTH_SECRET Environment Variable is not Set.");
    return NextResponse.json<ApiResponse<never>>(
      { success: false, message: "Server Configuration Error." },
      { status: 500 }
    );
  }

  const { pathname } = request.nextUrl;

  //   Block request if user unauth for protectedRoutes
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  if (isProtectedRoute) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token || (!token.userId && token.guest)) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    return NextResponse.next();
  }
}
