import React from "react";
import { lorem } from "../constants";

import { PoolBackground } from "./backgrounds/PoolBackground";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

interface Props {}

export const Pool: React.FC<Props> = ({}) => {
  return (
    <section className="relative" id="faq">
      <div className="lg:absolute z-[100] w-full top-[10%] flex flex-col items-center">
        <Title>LOREM</Title>
        <Paragraph>{lorem}</Paragraph>
      </div>

      <PoolBackground />
    </section>
  );
};
