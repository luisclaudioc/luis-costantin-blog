export const hashtagGenerator = (title: string): string[] => {
    return title
      .split(" ") 
      .slice(0, 3) // Take first 3 words to make hashtags
      .map((word) => `#${word.replace(/[^\w]/g, "").toLowerCase()}`); 
  };
  