// Imports
import { NextResponse } from "next/server";
// Lib
import { ApiError } from "@/lib/error/ApiError";
// Types
import { ApiResponse, CountryResponse } from "@/types";
import { ApiCountries } from "@/types/externel-api";

//
export async function GET() {
  try {
    const response = await fetch("https://www.apicountries.com/countries");
    if (!response.ok) {
      throw new ApiError("Error from external api.", response.status);
    }

    const data: ApiCountries[] = await response.json();
    if (!data || data.length === 0) {
      throw new ApiError("Error from external api.Incomplelete Response.", 404);
    }

    const countriesData: CountryResponse[] = data.map((country: any) => {
      return {
        country: country.name,
        countryCode: country.alpha2Code,
        capital: country.capital,
      };
    });

    return NextResponse.json<ApiResponse<CountryResponse[]>>({
      success: true,
      data: countriesData,
      message: "Successfully fetchedCountries.",
    });
  } catch (error) {
    // Message
    const message =
      error instanceof ApiError ? error.message : "Unexpected error.";
    // Status
    const status = error instanceof ApiError ? error.status : 500;
    // Console
    console.error("Error in /fetch/countries API:", {
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
