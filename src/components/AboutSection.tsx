import React from "react";

import { Blob } from "./Blob";
import { Markdown } from "./Markdown";
import { Title } from "./Title";

interface Props {
  about_title: string;
  about_text: string;
}

export const AboutSection: React.FC<Props> = ({ about_title, about_text }) => {
  return (
    <Blob id="about">
      <Title>{about_title}</Title>
      <Markdown>{about_text}</Markdown>
    </Blob>
  );
};
