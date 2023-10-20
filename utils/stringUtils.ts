export const stripHTMLButKeepAt = (input: string): string => {
  return input.replace(/<\/?[^>@]+(>|$)/g, "");
};
