import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

import { isBrowser } from "../pages";
import { CityMember } from "../typings";
import { Avatar } from "./Avatar";
import { CityBackground } from "./backgrounds/CityBackground";
import { Markdown } from "./Markdown";
import { Title } from "./Title";
import { useAnimations } from "./useAnimations";
import { useMediaQuery } from "./useMediaQuery";

interface Props {
  city_title: string;
  city_text: string;
  city_members: CityMember[];
}

export const City: React.FC<Props> = ({
  city_title,
  city_text,
  city_members,
}) => {
  // const itemsRef = useRef<Array<HTMLDivElement | null>>(
  //   Array.from({ length: city_members.length }, () => null)
  // );
  const md = useMediaQuery("(max-width: 1024px)");

  // useAnimations<HTMLDivElement>(itemsRef as React.RefObject<HTMLDivElement[]>);

  useEffect(() => {
    // if (md) return;

    gsap.to(".pImageCity", {
      yPercent: -25,
      ease: "none",
      scrollTrigger: {
        trigger: ".pSectionCity",
        scrub: true,
      },
    });
  }, [md]);

  return md || !isBrowser ? (
    <section className="grid" id="team">
      <div
        className="flex flex-col items-center max-w-6xl gap-2 p-4 mx-auto pb-[26rem] md:pb-[52rem]"
        style={{ gridArea: "1/1" }}
      >
        <Title>{city_title}</Title>
        <Markdown className="p-4 bg-white rounded !text-black">
          {city_text}
        </Markdown>

        <div className="justify-center gap-4 fancy-2grid md:fancy-3grid">
          {city_members &&
            city_members.map(
              (
                {
                  city_member_avatar,
                  city_member_description,
                  city_member_name,
                  city_member_socials,
                },
                i
              ) => (
                <Avatar
                  key={i}
                  // ref={(e) => (itemsRef.current[i] = e)}
                  className="fancy-2item md:fancy-3item"
                  avatar={city_member_avatar}
                  name={city_member_name}
                  description={city_member_description}
                  socials={city_member_socials}
                />
              )
            )}
        </div>
      </div>

      <CityBackground className="mt-auto mb-0" style={{ gridArea: "1/1" }} />
    </section>
  ) : (
    <section className="relative pSectionCity" id="team">
      <div className="flex flex-col items-center max-w-6xl gap-8 p-4 mx-auto">
        <Title>{city_title}</Title>
        <Markdown className="p-4 bg-white rounded !text-black">
          {city_text}
        </Markdown>

        <div className="justify-center gap-4 fancy-2grid md:fancy-3grid">
          {city_members &&
            city_members.map(
              (
                {
                  city_member_avatar,
                  city_member_description,
                  city_member_name,
                  city_member_socials,
                },
                i
              ) => (
                <Avatar
                  key={i}
                  // ref={(e) => (itemsRef.current[i] = e)}
                  className="fancy-2item md:fancy-3item"
                  avatar={city_member_avatar}
                  name={city_member_name}
                  description={city_member_description}
                  socials={city_member_socials}
                />
              )
            )}
        </div>
      </div>

      <StaticImage
        className="!absolute -top-96 w-full pImageCity -z-10"
        src="../../images/city/static.png"
        alt=""
      />

      <StaticImage
        className="w-[20%] opacity-0"
        src="../../images/city/static.png"
        alt=""
      />
    </section>
  );
};
