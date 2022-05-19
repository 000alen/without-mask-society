import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import React, { useEffect } from "react";

import { isBrowser } from "../pages";
import { FAQQuestion } from "../typings";
import { PoolBackground } from "./backgrounds/PoolBackground";
import { BenefitsItem } from "./BenefitsItem";
import { Blob } from "./Blob";
import { Blog } from "./Blog";
import { FAQ } from "./FAQ";
import { Markdown } from "./Markdown";
import { RoadmapItem } from "./RoadmapItem";
import { Title } from "./Title";
import { useMediaQuery } from "./useMediaQuery";

interface Props {
  faq_title: string;
  faq_questions: FAQQuestion[];
}

export const Pool: React.FC<Props> = ({ faq_title, faq_questions }) => {
  return (
    <>
      <Blob id="benefits">
        <FAQ faq_title={faq_title} faq_questions={faq_questions} />
      </Blob>

      <section className="relative">
        <div className="z-10 flex flex-col items-center max-w-6xl gap-8 p-4 mx-auto h-min">
          <Blog />
        </div>

        {/* <StaticImage
          className="!absolute -bottom-[200%] w-full -z-10"
          src="../images/pool/sm_empty.png"
          alt=""
        /> */}
      </section>
    </>
  );
};
