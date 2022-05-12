import React, { useEffect, useRef, useState } from "react";
import { HeroShowcase } from "../typings";

import { Title } from "./Title";

interface Props {
  className?: string;
  hero_showcase: HeroShowcase[];
}

export const choose = <T,>(list: T[], n: number): T[] => {
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

export const Showcase: React.FC<Props> = ({
  className = "",
  hero_showcase,
}) => {
  const [showcase] = useState<HeroShowcase[]>(choose(hero_showcase, 4));

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
      }, 5000);
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
    <div className={`${className} grid grid-cols-2 md:grid-cols-4 gap-4 px-4`}>
      {showcase.map(
        (
          { hero_showcase_masked, hero_showcase_unmasked, hero_showcase_url },
          i
        ) => (
          <div
            key={i}
            className="relative transition-all border-2 border-green-400 border-solid rounded hover:glow"
          >
            <a href={hero_showcase_url} target="_blank">
              <img
                className={`${
                  masked ? "" : "opacity-0"
                } max-w-[8rem] lg:max-w-[12rem] transition-all`}
                src={hero_showcase_masked}
                alt=""
              />
              <img
                className={`${
                  masked ? "opacity-0" : ""
                } max-w-[8rem] lg:max-w-[12rem] absolute top-0 transition-all`}
                src={hero_showcase_unmasked}
                alt=""
              />
            </a>
          </div>
        )
      )}
    </div>
  );
};
