import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { Benefit } from "../typings";
import { BenefitsItem } from "./BenefitsItem";
import { Blob } from "./Blob";
import { Markdown } from "./Markdown";
import { RoadmapItem } from "./RoadmapItem";
import { Title } from "./Title";

interface Props {
  donations_title: string;
  donations_text: string;
  benefits_title: string;
  benefits: Benefit[];
}

export const Planets: React.FC<Props> = ({
  donations_title,
  donations_text,
  benefits_title,
  benefits,
}) => {
  return (
    <>
      <Blob id="donations">
        <Title>{donations_title}</Title>
        <Markdown>{donations_text}</Markdown>
      </Blob>

      <section id="benefits" className="relative">
        <div className="z-10 flex flex-col items-center max-w-6xl gap-8 p-4 mx-auto pb-96 lg:pb-0 h-min">
          <Title>BENEFITS</Title>
          <div className="flex flex-col w-full gap-2">
            {benefits &&
              benefits.map(
                ({ benefit_title: title, benefit_text: text }, i) => (
                  <BenefitsItem key={i} title={title} text={text} />
                )
              )}
          </div>
        </div>

        <StaticImage
          className="!absolute h-80 -bottom-[2%] lg:!hidden w-full -z-[9]"
          src="../images/planets/sm_P.png"
          objectFit="contain"
          alt=""
        />

        <StaticImage
          className="!absolute !hidden lg:!block w-96 rotate-45 -left-24 bottom-0 -z-[9]"
          src="../images/planets/lg_P1.png"
          alt=""
        />

        <StaticImage
          className="!absolute -scale-x-100 !hidden lg:!block w-96 -rotate-45 -right-36 bottom-96 -z-[9]"
          src="../images/planets/lg_P2.png"
          alt=""
        />

        <StaticImage
          className="!absolute -bottom-[10%] lg:-bottom-[20%] w-full -z-30"
          src="../images/planets/sm_empty.png"
          alt=""
        />
      </section>
    </>
  );
};
