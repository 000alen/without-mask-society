import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { Question } from "../typings";
import { Blob } from "./Blob";
import { Blog } from "./Blog";
import { FAQ } from "./FAQ";

interface Props {
  faq_title: string;
  faq_questions: Question[];
}

export const Pool: React.FC<Props> = ({ faq_title, faq_questions }) => {
  return (
    <>
      <Blob id="faq">
        <FAQ faq_title={faq_title} faq_questions={faq_questions} />
      </Blob>

      <section id="blog" className="relative">
        <div className="z-10 flex flex-col items-center max-w-6xl gap-8 p-4 mx-auto h-min">
          <Blog />
        </div>
      </section>
    </>
  );
};
