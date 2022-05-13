import React from "react";
import ReactMarkdown from "react-markdown";
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
    <section className="grid" id="benefits">
      <div
        className="z-10 flex flex-col items-center max-w-6xl p-4 mx-auto h-min"
        style={{ gridArea: "1/1" }}
      >
        <Title>{pool_title}</Title>

        {/* <Paragraph>{pool_text}</Paragraph> */}
        <ReactMarkdown className="font-mono prose prose-invert lg:prose-xl">
          {pool_text}
        </ReactMarkdown>
      </div>

      <PoolBackground className="mt-12 md:-mt-12" style={{ gridArea: "1/1" }} />
    </section>
  );
};
