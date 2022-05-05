import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Pool = () => {
  return (
    <section>
      <StaticImage
        className="w-full h-auto"
        src="../images/pool/pool.png"
        alt=""
      />
    </section>
  );
};
