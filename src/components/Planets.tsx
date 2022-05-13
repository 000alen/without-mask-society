import React from "react";

import { PlanetsBackground } from "./backgrounds/PlanetsBackground";
import { Title } from "./Title";
import { Markdown } from "./Markdown";

interface Props {
  planets_title: string;
  planets_text: string;
}

export const Planets: React.FC<Props> = ({ planets_title, planets_text }) => {
  return (
    <section className="grid -mt-20 md:-mt-36 lg:-mt-72" id="donations">
      <div
        className="z-10 flex flex-col items-center max-w-6xl gap-2 p-4 mx-auto h-min"
        style={{ gridArea: "1/1" }}
      >
        <Title>{planets_title}</Title>
        <Markdown>{planets_text}</Markdown>
      </div>

      <PlanetsBackground
        className="mt-80 md:mt-0"
        style={{ gridArea: "1/1" }}
      />
    </section>
  );
};
