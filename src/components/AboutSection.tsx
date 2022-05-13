import React from "react";

import { Title } from "./Title";
import { Markdown } from "./Markdown";

interface Props {
  about_title: string;
  about_text: string;
}

export const AboutSection: React.FC<Props> = ({ about_title, about_text }) => {
  return (
    <>
      <div className="wave2"></div>

      <section
        className="bg-[#000067] flex flex-col p-4 items-center gap-2"
        id="about"
      >
        <Title>{about_title}</Title>
        <Markdown>{about_text}</Markdown>
      </section>
      <div className="wave2 flip"></div>
    </>
  );
};
