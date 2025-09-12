// Imports
import { rankingPhrases } from "@/lib/constants/rankingPhrases";

// Types
type TagFormValidator = (phrase: string, keyword: string) => string | null;

//
const tagFormValidator: TagFormValidator = (phrase, keyword) => {
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

export default tagFormValidator;
