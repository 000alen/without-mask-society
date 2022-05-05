import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Forest = () => {
  return (
    <section>
      <StaticImage
        className="w-full h-auto"
        src="../images/forest/forest.png"
        alt=""
      />
    </section>
  );
};
