import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import React, { useEffect } from "react";

import { isBrowser } from "../pages";
import { PoolBackground } from "./backgrounds/PoolBackground";
import { BenefitsItem } from "./BenefitsItem";
import { Blob } from "./Blob";
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

  // useEffect(() => {
  //   gsap.to(".pContentPool", {
  //     yPercent: md ? 100 : 250,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".pSectionPool",
  //       scrub: true,
  //     },
  //   });

  //   gsap.to(".pImagePool", {
  //     yPercent: -50,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".pSectionPool",
  //       scrub: true,
  //     },
  //   });
  // }, [sm, md]);

  return (
    <>
      <Blob id="benefits">
        <Title>{pool_title}</Title>
        <Markdown>{pool_text}</Markdown>
      </Blob>

      <section
        className={
          sm || !isBrowser
            ? "grid -mt-20 md:-mt-96 lg:mt-[-50rem]"
            : "relative -mt-80 lg:-mt-[50rem] pSectionPool"
        }
      >
        {/* <div
          className={`z-10 flex flex-col items-center max-w-6xl gap-8 p-4 mx-auto h-min ${
            sm || !isBrowser ? "-mt-28" : "pContentPool"
          } `}
          {...(md || !isBrowser ? { style: { gridArea: "1/1" } } : {})}
        >
        </div> */}

        {sm || !isBrowser ? (
          <PoolBackground
            className="mt-36 md:-mt-12"
            style={{ gridArea: "1/1" }}
          />
        ) : (
          <>
            <StaticImage
              className="!absolute top-0 w-full pImagePool -z-10"
              src="../images/pool/empty.png"
              alt=""
            />

            <StaticImage
              className="w-[50%] opacity-0"
              src="../images/pool/empty.png"
              alt=""
            />
          </>
        )}
      </section>
    </>
  );
};
