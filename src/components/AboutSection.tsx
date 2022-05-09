import React from "react";
import { Paragraph } from "./Paragraph";

import { Title } from "./Title";

interface Props {
  about_title: string;
  about_text: string;
}

export const AboutSection: React.FC<Props> = ({ about_title, about_text }) => {
  return (
    <>
      <div className="wave2"></div>

      <section
        className="bg-[#000067] flex flex-col items-center p-8 gap-2"
        id="about"
      >
        <Title>{about_title}</Title>
        <Paragraph>{about_text}</Paragraph>
      </section>
      <div className="wave2 flip"></div>
    </>
  );
};
