import React, { useEffect } from "react";

import { PoolBackground } from "./backgrounds/PoolBackground";
import { Markdown } from "./Markdown";
import { Title } from "./Title";
import { useMediaQuery } from "./useMediaQuery";
import gsap from "gsap";
import { StaticImage } from "gatsby-plugin-image";
import { RoadmapItem } from "./RoadmapItem";
import { BenefitsItem } from "./BenefitsItem";
import { isBrowser } from "../pages";

interface Props {
  pool_title: string;
  pool_text: string;
}

export const Pool: React.FC<Props> = ({ pool_title, pool_text }) => {
  const sm = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    // if (sm) return;

    gsap.to(".pContentPool", {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSectionPool",
        scrub: true,
      },
    });

    gsap.to(".pImagePool", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSectionPool",
        scrub: true,
      },
    });
  }, []);

  return sm || !isBrowser ? (
    <section className="grid -mt-32 md:-mt-96 lg:mt-[-50rem]" id="benefits">
      <div
        className="z-10 flex flex-col items-center max-w-6xl p-4 mx-auto md:mt-48 h-min"
        style={{ gridArea: "1/1" }}
      >
        <Title>{pool_title}</Title>
        <Markdown className="font-bold">{pool_text}</Markdown>
      </div>

      <PoolBackground className="mt-36 md:-mt-12" style={{ gridArea: "1/1" }} />
    </section>
  ) : (
    <section className="relative pSectionPool" id="benefits">
      <div className="relative z-10 flex flex-col items-center max-w-6xl p-4 mx-auto pContentPool h-min">
        <Title>{pool_title}</Title>
        <Markdown className="font-bold">{pool_text}</Markdown>
      </div>

      <StaticImage
        className="!absolute top-0 w-full pImagePool -z-10"
        src="../../images/pool/static.png"
        alt=""
      />

      <StaticImage
        className="w-[50%] opacity-0"
        src="../../images/pool/static.png"
        alt=""
      />
    </section>
  );
};
