import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Planets = () => {
  return (
    <section>
      <StaticImage
        className="w-full h-auto"
        src="../images/planets/planets.png"
        alt=""
      />
    </section>
  );
};
