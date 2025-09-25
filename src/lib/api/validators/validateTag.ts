// Imports
import { rankingPhrases } from "@/lib/constants/rankingPhrases";
// Types
type IsValidTag = (phrase: string, keyword: string) => string | null;

//
export const isValidTag: IsValidTag = (phrase, keyword) => {
  if (
    !phrase ||
    typeof phrase !== "string" ||
    !rankingPhrases.includes(phrase)
  ) {
    return "Invalid phrase.";
  }

  if (!keyword || typeof keyword !== "string") {
    return "Invalid keyword.";
  }

  return null;
};
