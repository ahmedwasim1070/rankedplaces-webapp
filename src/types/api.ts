// Imports
import { Prisma } from "@/generated/prisma";

// Api response type
export type ApiResponse<T> =
  | { success: true; data: T; message: string }
  | { success: false; message: string };

// City response type
export type CitiesResponse = {
  name: string;
  lat: number;
  lng: number;
};

// Country response type
export type CountryResponse = {
  country: string;
  countryCode: string;
  capital: string;
};

// FetchTags Responses
// Response in world fetch type
export type worldFetchTagsResponse = Prisma.TagsGetPayload<{
  include: {
    _count: {
      select: {
        place_tags: true;
      };
    };
  };
}>;
// Response in country fetch type
export type countryFetchsTagResponse = Prisma.TagsGetPayload<{
  include: {
    _count: {
      select: {
        place_tags: {
          where: {
            place: { country: string };
          };
        };
      };
    };
  };
}>;
// Response in city fetch type
export type cityFetchTagsResponse = Prisma.TagsGetPayload<{
  include: {
    _count: {
      select: {
        place_tags: {
          where: {
            place: { country: string; city: string };
          };
        };
      };
    };
  };
}>;

// Response of fetch/ip-geo-data
export type IpGeoDataResponse = {
  country: string;
  countryCode: string;
};

// Response of fetch/lat-n-lng-data
export type LatNLngDataResponse = {
  country: string;
  countryCode: string;
  city: string;
  lat: number;
  lng: number;
};

export type CapitalReponse = {
  city: string;
  lat: number;
  lng: number;
};

interface MatchedSubstring {
  length: number;
  offset: number;
}

interface Term {
  offset: number;
  value: string;
}

interface StructuredFormatting {
  main_text: string;
  main_text_matched_substrings: MatchedSubstring[];
  secondary_text: string;
}

export type PlaceSuggestionResponse = {
  description: string;
  matched_substrings: MatchedSubstring[];
  place_id: string;
  reference: string;
  structured_formatting: StructuredFormatting;
  terms: Term[];
  types: string[];
};
