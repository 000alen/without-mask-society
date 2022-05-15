import React from "react";

import { PoolBackground } from "./backgrounds/PoolBackground";
import { Markdown } from "./Markdown";
import { Title } from "./Title";

interface Props {
  pool_title: string;
  pool_text: string;
}

export const Pool: React.FC<Props> = ({ pool_title, pool_text }) => {
  return (
    <section className="grid -mt-32 md:-mt-72 lg:-mt-96" id="benefits">
      <div
        className="z-10 flex flex-col items-center max-w-6xl p-4 mx-auto h-min"
        style={{ gridArea: "1/1" }}
      >
        <Title>{pool_title}</Title>
        <Markdown>{pool_text}</Markdown>
      </div>

      <PoolBackground className="mt-72 md:-mt-12" style={{ gridArea: "1/1" }} />
    </section>
  );
};
