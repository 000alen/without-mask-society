import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import React, { useEffect } from "react";

import { isBrowser } from "../pages";
import { PoolBackground } from "./backgrounds/PoolBackground";
import { BenefitsItem } from "./BenefitsItem";
import { Markdown } from "./Markdown";
import { RoadmapItem } from "./RoadmapItem";
import { Title } from "./Title";
import { useMediaQuery } from "./useMediaQuery";

interface Props {
  pool_title: string;
  pool_text: string;
}

export const Pool: React.FC<Props> = ({ pool_title, pool_text }) => {
  const sm = useMediaQuery("(max-width: 768px)");
  const md = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    // if (sm) return;

    gsap.to(".pContentPool", {
      yPercent: md ? 100 : 250,
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
  }, [sm, md]);

  return sm || !isBrowser ? (
    <section className="grid -mt-20 md:-mt-96 lg:mt-[-50rem]" id="benefits">
      <div
        className="z-10 flex flex-col items-center max-w-6xl p-4 mx-auto -mt-28 h-min"
        style={{ gridArea: "1/1" }}
      >
        <Title>{pool_title}</Title>
        <Markdown className="p-4 bg-white rounded !text-black">
          {pool_text}
        </Markdown>
      </div>

      <PoolBackground className="mt-36 md:-mt-12" style={{ gridArea: "1/1" }} />
    </section>
  ) : (
    <section
      className="relative -mt-80 lg:-mt-[50rem] pSectionPool"
      id="benefits"
    >
      <div className="relative z-10 flex flex-col items-center max-w-6xl gap-8 p-4 mx-auto pContentPool h-min">
        <Title>{pool_title}</Title>
        <Markdown className="p-4 bg-white rounded !text-black">
          {pool_text}
        </Markdown>
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
