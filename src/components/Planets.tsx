import React from "react";

import { PlanetsBackground } from "./backgrounds/PlanetsBackground";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { lorem } from "../constants";

interface Props {}

export const Planets: React.FC<Props> = ({}) => {
  return (
    <section className="relative" id="shop">
      <div
        className={`top-[10%] lg:absolute z-[100] inset-x-0 flex flex-col gap-2 items-center`}
      >
        <Title>DONATION</Title>
        <Paragraph>{lorem}</Paragraph>
      </div>

      <PlanetsBackground />
    </section>
  );
};
