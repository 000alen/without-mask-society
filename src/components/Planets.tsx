import React, { useEffect } from "react";

import { PlanetsBackground } from "./backgrounds/PlanetsBackground";
import { Title } from "./Title";
import { Markdown } from "./Markdown";
import gsap from "gsap";
import { StaticImage } from "gatsby-plugin-image";
import { useMediaQuery } from "./useMediaQuery";

interface Props {
  planets_title: string;
  planets_text: string;
}

export const Planets: React.FC<Props> = ({ planets_title, planets_text }) => {
  const sm = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (sm) return;

    gsap.to(".pImagePlanets", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSectionPlanets",
        scrub: true,
      },
    });
  }, []);

  return sm ? (
    <section className="grid -mt-20 md:-mt-36 lg:-mt-72" id="donations">
      <div
        className="z-10 flex flex-col items-center max-w-6xl gap-2 p-4 mx-auto md:mt-56 h-min"
        style={{ gridArea: "1/1" }}
      >
        <Title>{planets_title}</Title>
        <Markdown className="font-bold">{planets_text}</Markdown>
      </div>

      <PlanetsBackground
        className="mt-80 md:mt-0"
        style={{ gridArea: "1/1" }}
      />
    </section>
  ) : (
    <section className="relative pSectionPlanets" id="donations">
      <div className="relative z-10 flex flex-col items-center max-w-6xl gap-2 p-4 mx-auto pContentPlanets h-min">
        <Title>{planets_title}</Title>
        <Markdown className="font-bold">{planets_text}</Markdown>
      </div>

      <StaticImage
        className="absolute top-0 w-full pImagePlanets -z-10"
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
