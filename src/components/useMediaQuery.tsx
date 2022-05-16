import { useEffect, useState } from "react";

const isBrowser = typeof window !== "undefined";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(
    isBrowser ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    if (!isBrowser) return;
    window
      .matchMedia(query)
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return matches;
};
