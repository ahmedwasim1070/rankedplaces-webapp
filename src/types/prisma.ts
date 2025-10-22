// Imports
import { Prisma } from "@/generated/prisma";

// lib function findPlace
export type PlacesAndTags = Prisma.PlacesGetPayload<{
  include: {
    place_tag: {
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
        place_tag: true;
      };
    };
  };
}>;
// Response in country fetch type
export type countryFetchsTagResponse = Prisma.TagsGetPayload<{
  include: {
    _count: {
      select: {
        place_tag: {
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
        place_tag: {
          where: {
            place: { country: string; city: string };
          };
        };
      };
    };
  };
}>;

// Response from /add/vote
export type AddVoteResponse = {
  updated: Prisma.PlaceTagsGetPayload<{}>;
  tag: string;
  place: string;
};
