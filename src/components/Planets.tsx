import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import React, { useEffect } from "react";

import { isBrowser } from "../pages";
import { PlanetsBackground } from "./backgrounds/PlanetsBackground";
import { Blob } from "./Blob";
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

  // useEffect(() => {
  //   gsap.to(".pContentPlanets", {
  //     yPercent: md ? 50 : 200,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".pSectionPlanets",
  //       scrub: true,
  //     },
  //   });

  //   gsap.to(".pImagePlanets", {
  //     yPercent: -50,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".pSectionPlanets",
  //       scrub: true,
  //     },
  //   });
  // }, [sm, md]);

  return (
    <>
      <Blob id="donations">
        <Title>{planets_title}</Title>
        <Markdown>{planets_text}</Markdown>
      </Blob>

      <section
        className={
          sm || !isBrowser
            ? "grid -mt-20 md:-mt-36 lg:-mt-72"
            : "relative -mt-36 lg:-mt-96 pSectionPlanets"
        }
      >
        {/* <div
        className={`z-10 flex flex-col items-center max-w-6xl gap-8 p-4 mx-auto ${
          sm || !isBrowser ? "md:mt-56 h-min" : "pContentPlanets h-min"
        }`}
        {...(sm || !isBrowser ? { style: { gridArea: "1/1" } } : {})}
      >
      </div> */}

        {sm || !isBrowser ? (
          <PlanetsBackground
            className="mt-64 md:mt-0"
            style={{ gridArea: "1/1" }}
          />
        ) : (
          <>
            <StaticImage
              className="!absolute top-0 w-full pImagePlanets -z-10"
              src="../images/planets/empty.png"
              alt=""
            />

            <StaticImage
              className="w-[50%] opacity-0"
              src="../images/planets/empty.png"
              alt=""
            />
          </>
        )}
      </section>
    </>
  );
};
