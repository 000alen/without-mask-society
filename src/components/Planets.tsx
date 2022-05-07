import React from "react";
import { PlanetsBackground } from "./backgrounds/PlanetsBackground";

import { Lorem } from "./Lorem";

interface Props {
  planets_title: string;
  planets_text: string;
}

export const Planets: React.FC<Props> = ({ planets_title, planets_text }) => {
  return (
    <section className="relative">
      <Lorem top="20%" title={planets_title} text={planets_text} />

      <PlanetsBackground />
    </section>
  );
};
