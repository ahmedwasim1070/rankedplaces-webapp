// Imports
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Types
import { ApiResponse } from "@/types";
import { Tags } from "@/generated/prisma";

//
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const searchedTag = searchParams.get(`searched-tag`);
  try {
    if (!searchedTag || searchedTag.length < 3) {
      throw new ApiError("searched-tag value is Invalid or Required.", 400);
    }

    const suggestedPlace: Tags[] = await prisma.tags.findMany({
      where: {
        name: {
          contains: searchedTag,
          mode: "insensitive",
        },
      },
      take: 5,
      orderBy: {
        name: "asc",
      },
    });

    if (!suggestedPlace) {
      throw new ApiError("No Tags found with that searched string.", 404);
    }

    return NextResponse.json<ApiResponse<Tags[]>>({
      success: true,
      data: suggestedPlace,
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
