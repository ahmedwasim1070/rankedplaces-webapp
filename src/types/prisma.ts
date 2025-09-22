// Imports
import { Prisma } from "@/generated/prisma";

// lib function findPlace
export type PlacesAndTags = Prisma.PlacesGetPayload<{
  include: {
    place_tags: {
      include: {
        tag: true;
      };
    };
  };
}>;

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
