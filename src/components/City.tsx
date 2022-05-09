import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

import { CityMember } from "../typings";
import { Avatar } from "./Avatar";
import { CityBackground } from "./backgrounds/CityBackground";
import { Title } from "./Title";

interface Props {
  city_title: string;
  city_members: CityMember[];
}

export const City: React.FC<Props> = ({ city_title, city_members }) => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>(
    Array.from({ length: city_members.length }, () => null)
  );

  const hideItem = (item: HTMLDivElement) => {
    gsap.set(item, { autoAlpha: 0 });
  };

  function animateItem(item: HTMLDivElement, direction: number = 1) {
    let x = 0;
    let y = direction * 100;

    if (item.classList.contains("gs_fromLeft")) {
      x = -300;
      y = 0;
    } else if (item.classList.contains("gs_fromRight")) {
      x = 300;
      y = 0;
    }

    item.style.transform = "translate(" + x + "px, " + y + "px)";
    item.style.opacity = "0";

    gsap.fromTo(
      item,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  }

  useEffect(() => {
    itemsRef.current!.forEach((item) => {
      hideItem(item!);

      ScrollTrigger.create({
        trigger: item,
        onEnter: () => {
          animateItem(item!);
        },
        onEnterBack: () => {
          animateItem(item!, -1);
          animateItem(item!, -1);
        },
        onLeave: () => {
          hideItem(item!);
        },
      });
    });
  }, []);

  return (
    <section className="relative" id="team">
      <div className="lg:absolute z-[100] w-full top-[10%] justify-center flex flex-col">
        <Title className="mb-8">{city_title}</Title>

        <div className="grid justify-center grid-cols-1 gap-4 lg:grid-cols-3 place-content-center">
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
                  ref={(e) => (itemsRef.current[i] = e)}
                  avatar={city_member_avatar}
                  name={city_member_name}
                  description={city_member_description}
                  socials={city_member_socials}
                />
              )
            )}{" "}
        </div>
      </div>

      <CityBackground />
    </section>
  );
};
