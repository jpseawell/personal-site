export const stripHTMLButKeepAt = (input: string): string => {
  return input.replace(/<\/?[^>@]+(>|$)/g, "");
};

export function camelToSlug(str: string): string {
  return (
    str
      // Insert a hyphen before each uppercase letter or before a digit that follows a letter
      .replace(/([a-z])([A-Z0-9])|([A-Z0-9])([a-z])/g, "$1$3-$2$4")
      .toLowerCase()
  );
}
