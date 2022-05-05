import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const City = () => {
  return (
    <section>
      <StaticImage
        className="w-full h-auto"
        src="../images/city/city.png"
        alt=""
      />
    </section>
  );
};
