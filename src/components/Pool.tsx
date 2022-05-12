import React from "react";
import { lorem } from "../constants";

import { PoolBackground } from "./backgrounds/PoolBackground";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

interface Props {
  pool_title: string;
  pool_text: string;
}

export const Pool: React.FC<Props> = ({ pool_title, pool_text }) => {
  return (
    <section className="relative" id="benefits">
      <div className="lg:absolute p-4 z-10 w-full top-[10%] flex flex-col items-center">
        <Title>{pool_title}</Title>
        <Paragraph>{pool_text}</Paragraph>
      </div>

      <PoolBackground />
    </section>
  );
};
