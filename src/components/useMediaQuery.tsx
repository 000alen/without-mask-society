import { useEffect, useState } from "react";

// const isBrowser = typeof window !== "undefined";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    setMatches(window.matchMedia(query).matches);

    window
      .matchMedia(query)
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return matches;
};
