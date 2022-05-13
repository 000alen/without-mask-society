import React from "react";
import { Paragraph } from "./Paragraph";

import { Title } from "./Title";
import ReactMarkdown from "react-markdown";

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
        {/* <Paragraph>{about_text}</Paragraph> */}
        <ReactMarkdown className="font-mono prose prose-invert lg:prose-xl">
          {about_text}
        </ReactMarkdown>
      </section>
      <div className="wave2 flip"></div>
    </>
  );
};
