// Imports
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { prisma } from "@/lib/prisma/prisma";
// Lib
import { ApiError } from "@/lib/error/ApiError";
import tagFormValidator from "@/lib/api/validators/tagForm.validator";
// Types
import { ApiResponse, TagFormData } from "@/types";

//
export async function POST(request: NextRequest) {
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    const uniqueId = token?.unique_id;

    const body: TagFormData = await request.json();
    const { phrase, keyword } = body;

    //
    const errorInData = tagFormValidator(phrase, keyword);
    if (errorInData) {
      throw new ApiError(errorInData, 400);
    }

    const tag = phrase + " " + keyword;

    const user = await prisma.users.findUnique({
      where: {
        unique_id: uniqueId,
      },
    });
    if (!user) {
      throw new ApiError("No user found.", 404);
    }

    const tagInDb = await prisma.tags.findUnique({
      where: {
        name: tag,
      },
    });
    if (tagInDb) {
      throw new ApiError("Tag already exsists.", 409);
    }

    await prisma.tags.create({
      data: {
        name: tag,
        author_id: user.id,
      },
    });

    return NextResponse.json<ApiResponse<null>>(
      {
        success: true,
        message: "Successfully created tag.",
        data: null,
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
    console.error(
      "Error in createTag.",
      "Message : ",
      message,
      "Error : ",
      error
    );
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
