// Imports
import { sanitizeString } from "@/utils";

//
export const isValidTags = (tags: string[]): string[] => {
  if (!Array.isArray(tags)) return [];
  return tags
    .map((tag) => sanitizeString(tag, 50))
    .filter((tag) => tag.length > 0 && tag.length <= 50)
    .slice(0, 6);
};
