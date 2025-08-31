// Imports
import { NextRequest, NextResponse } from "next/server";
// Lib
import { ApiError } from "@/lib/error/ApiError";
import tagFormValidator from "@/lib/api/validators/tagForm.validator";
// Types
import { ApiResponse, TagFormData } from "@/types";

//
export async function POST(request: NextRequest) {
  try {
    const body: TagFormData = await request.json();
    const { phrase, keyword } = body;

    //
    const errorInData = tagFormValidator(phrase, keyword);
    if (errorInData) {
      throw new Error(errorInData);
    }
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
