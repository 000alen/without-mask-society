import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import React, { useEffect } from "react";

import { isBrowser } from "../pages";
import { PlanetsBackground } from "./backgrounds/PlanetsBackground";
import { Markdown } from "./Markdown";
import { Title } from "./Title";
import { useMediaQuery } from "./useMediaQuery";

interface Props {
  planets_title: string;
  planets_text: string;
}

export const Planets: React.FC<Props> = ({ planets_title, planets_text }) => {
  const sm = useMediaQuery("(max-width: 768px)");
  const md = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    // if (sm) return;

    gsap.to(".pContentPlanets", {
      yPercent: md ? 50 : 200,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSectionPlanets",
        scrub: true,
      },
    });

    gsap.to(".pImagePlanets", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSectionPlanets",
        scrub: true,
      },
    });
  }, [sm, md]);

  return sm || !isBrowser ? (
    // <section className="grid -mt-20 md:-mt-36 lg:-mt-72" id="donations">
    <section className="grid -mt-20 md:-mt-36 lg:-mt-72" id="donations">
      <div
        className="z-10 flex flex-col items-center max-w-6xl gap-2 p-4 mx-auto md:mt-56 h-min"
        style={{ gridArea: "1/1" }}
      >
        <Title>{planets_title}</Title>
        <Markdown className="p-4 bg-white rounded !text-black">
          {planets_text}
        </Markdown>
      </div>

      <PlanetsBackground
        className="mt-64 md:mt-0"
        style={{ gridArea: "1/1" }}
      />
    </section>
  ) : (
    <section
      className="relative -mt-36 lg:-mt-96 pSectionPlanets"
      id="donations"
    >
      <div className="relative z-10 flex flex-col items-center max-w-6xl gap-8 p-4 mx-auto pContentPlanets h-min">
        <Title>{planets_title}</Title>
        <Markdown className="p-4 bg-white rounded !text-black">
          {planets_text}
        </Markdown>
      </div>

      <StaticImage
        className="!absolute top-0 w-full pImagePlanets -z-10"
        src="../../images/planets/static.png"
        alt=""
      />

      <StaticImage
        className="w-[50%] opacity-0"
        src="../../images/planets/static.png"
        alt=""
      />
    </section>
  );
};
