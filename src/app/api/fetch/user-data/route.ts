// Imports
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// Lib
import { ApiError } from "@/lib/error/ApiError";
import { prisma } from "@/lib/prisma/prisma";
// Types
import { ApiResponse, FetchUserData } from "@/types";

//
export async function GET(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const uniqueId = token?.unique_id;
  if (!uniqueId) {
    throw new ApiError("No user found.", 401);
  }
  try {
    const userInDb = await prisma.users.findUnique({
      where: {
        unique_id: uniqueId,
      },
      include: {
        votes: true,
      },
    });
    if (!userInDb) {
      throw new ApiError("Unauthorized", 401);
    }

    return NextResponse.json<ApiResponse<FetchUserData>>({
      success: true,
      data: userInDb,
      message: "Successfully fetchedSuggestions.",
    });
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error("Error in /fetch/tags-suggestion API:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    // Response
    return NextResponse.json<ApiResponse<never>>(
      {
        success: false,
        message,
      },
      {
        status,
      }
    );
  }
}
