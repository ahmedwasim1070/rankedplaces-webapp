//
export const sanitizeString = (
  input: string,
  maxLength: number = 255
): string => {
  if (typeof input !== "string") return "";
  return input.trim().slice(0, maxLength).replace(/[<>]/g, "");
};
