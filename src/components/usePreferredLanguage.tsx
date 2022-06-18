import React, { useEffect } from "react";

import languages from "../data/languages";

export const usePreferredLanguage = () => {
  useEffect(() => {
    let preferredLangKey = localStorage.getItem("preferredLangKey");
    if (!preferredLangKey) {
      const userLangKey = navigator.language.substring(0, 2);
      preferredLangKey = languages.langs.includes(userLangKey)
        ? userLangKey
        : "en";
      localStorage.setItem("preferredLangKey", preferredLangKey);
    }

    if (window.location.pathname.includes("blog")) return;
    if (preferredLangKey === languages.defaultLangKey) return;

    if (!window.location.pathname.startsWith("/es"))
      window.location.href = `/es${window.location.pathname}`;
  }, []);
};
