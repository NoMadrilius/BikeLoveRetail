export const truncateText = (text: string, maxCharacters: number) => {
  if (text.length <= maxCharacters) {
    return text;
  } else {
    return text.slice(0, maxCharacters) + "...";
  }
};
