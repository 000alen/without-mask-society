import React from "react";

import { PlanetsBackground } from "./backgrounds/PlanetsBackground";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { lorem } from "../constants";

interface Props {
  planets_title: string;
  planets_text: string;
}

export const Planets: React.FC<Props> = ({ planets_title, planets_text }) => {
  return (
    <section className="relative" id="shop">
      <div className="top-[10%] lg:absolute z-10 p-4 inset-x-0 flex flex-col gap-2 items-center">
        <Title>{planets_title}</Title>
        <Paragraph>{planets_text}</Paragraph>
      </div>

      <PlanetsBackground />
    </section>
  );
};
