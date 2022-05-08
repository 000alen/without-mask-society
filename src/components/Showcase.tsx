import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import { HeroShowcase } from "../typings";

import { Title } from "./Title";

interface Props {
  className?: string;
  hero_showcase_title: string;
  hero_showcase: HeroShowcase[];
}

const choose = <T,>(list: T[], n: number): T[] => {
  const taken = new Array(list.length);
  const result = new Array(n);
  let length = list.length;

  if (n > length) return list;

  while (n--) {
    const i = Math.floor(Math.random() * length);
    result[n] = list[i in taken ? taken[i] : i];
    taken[i] = --length in taken ? taken[length] : length;
  }
  return result;
};

// ! TODO Make it a carousel for sm and md screens
export const Showcase: React.FC<Props> = ({
  className = "",
  hero_showcase_title,
  hero_showcase,
}) => {
  const [showcase] = useState<HeroShowcase[]>(choose(hero_showcase, 4));
  const [index, setIndex] = React.useState(0);

  const timerIdRef = useRef<number>(null);
  const [timerShouldStart, setTimerShouldStart] = useState<boolean | null>(
    null
  );
  const [timerEnded, setTimerEnded] = useState<boolean | null>(null);
  const [masked, setMasked] = useState<boolean>(false);

  useEffect(() => {
    // @ts-ignore
    timerIdRef.current = null;
    setTimerShouldStart(true);
    setTimerEnded(false);

    return () => clearTimeout(timerIdRef.current!);
  }, []);

  useEffect(() => {
    if (timerShouldStart && !timerIdRef.current) {
      // @ts-ignore
      timerIdRef.current = setTimeout(() => {
        setMasked((p) => !p);
        setTimerEnded(true);
      }, 2000);
      setTimerShouldStart(false);
      setTimerEnded(false);
    } else if (timerEnded) {
      // @ts-ignore
      timerIdRef.current = null;
      setTimerShouldStart(true);
      setTimerEnded(false);
    }
  }, [timerShouldStart, timerEnded]);

  return (
    <>
      <div
        className={`${className} hidden lg:flex flex-col gap-2 lg:flex-row transition-all hover:glow`}
      >
        {showcase.map(
          (
            { hero_showcase_masked, hero_showcase_unmasked, hero_showcase_url },
            i
          ) => (
            <div className="relative w-48">
              <img
                className={`${masked ? "" : "opacity-0"} w-48 h-auto`}
                src={hero_showcase_masked}
                alt=""
              />
              <img
                className={`${
                  masked ? "opacity-0" : ""
                } absolute top-0 w-48 h-auto`}
                src={hero_showcase_unmasked}
                alt=""
              />
            </div>
          )
        )}
      </div>

      <Title className={`${className} mb-8 lg:hidden`}>SHOWCASE</Title>

      <div className="relative lg:hidden slideshow-container">
        {showcase.map(
          (
            { hero_showcase_masked, hero_showcase_unmasked, hero_showcase_url },
            i
          ) => (
            <div
              key={i}
              className={`${
                index === i ? "block" : "slide"
              } fade relative w-48 transition-all hover:glow`}
            >
              <img
                className={`${masked ? "" : "opacity-0"} w-48 h-auto`}
                src={hero_showcase_masked}
                alt=""
              />
              <img
                className={`${
                  masked ? "opacity-0" : ""
                } absolute top-0 w-48 h-auto`}
                src={hero_showcase_unmasked}
                alt=""
              />
            </div>
          )
        )}

        {showcase.length > 1 && (
          <>
            <a
              className="prev"
              onClick={() => setIndex((p) => (p - 1) % showcase.length)}
            >
              &#10094;
            </a>
            <a
              className="next"
              onClick={() => setIndex((p) => (p + 1) % showcase.length)}
            >
              &#10095;
            </a>
          </>
        )}
      </div>
    </>
  );
};
