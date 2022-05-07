import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { PlanetsBackground } from "./backgrounds/PlanetsBackground";

import { Lorem } from "./Lorem";

export const Planets = () => {
  return (
    <section className="relative">
      <Lorem className="" top="20%" />

      <PlanetsBackground />
    </section>
  );
};
