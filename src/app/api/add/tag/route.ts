// Imports
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { prisma } from "@/lib/prisma/prisma";
// Lib
import { ApiError } from "@/lib/error/ApiError";
import { isValidTag } from "@/lib/api/validators";
// Types
import { ApiResponse, TagFormData } from "@/types";
import { Tags } from "@/generated/prisma";
import { sanitizeString } from "@/utils";

//
export async function POST(request: NextRequest) {
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    const uniqueId = token?.unique_id;
    if (!uniqueId) {
      throw new ApiError("No user found.", 401);
    }

    const body: TagFormData = await request.json();
    const { phrase, keyword } = body;

    const errorInData = isValidTag(phrase, keyword);
    if (errorInData) {
      throw new ApiError(errorInData, 400);
    }

    const sanitizeTag = sanitizeString(phrase + " " + keyword);

    const user = await prisma.users.findUnique({
      where: {
        unique_id: uniqueId,
      },
    });
    if (!user) {
      throw new ApiError("No user found.", 401);
    }

    const isTagInDb = await prisma.tags.findUnique({
      where: {
        name: sanitizeTag,
      },
    });
    if (isTagInDb) {
      throw new ApiError("Tag already exsists.", 409);
    }

    const tagInDb = await prisma.tags.create({
      data: {
        name: sanitizeTag,
        author_id: user.id,
      },
    });

    return NextResponse.json<ApiResponse<Tags>>(
      {
        success: true,
        data: tagInDb,
        message: "Successfully created tag.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error("Error in /add/tag API:", {
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
