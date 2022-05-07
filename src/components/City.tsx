import React, { useEffect, useRef } from "react";

import { Avatar } from "./Avatar";
import { Title } from "./Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CityBackground } from "./backgrounds/CityBackground";
import { CityTeamMember } from "../typings";

const items = [
  {
    id: "1",
    name: "Juanito",
    description: "3D Artist",
  },
  {
    id: "2",
    name: "Pamela",
    description: "3D Artist",
  },
  {
    id: "3",
    name: "Jaime",
    description: "3D Artist",
  },
  {
    id: "4",
    name: "Luchito",
    description: "3D Artist",
  },
  {
    id: "5",
    name: "Hugo",
    description: "3D Artist",
  },
];

interface Props {
  city_title: string;
  city_team: CityTeamMember[];
}

export const City: React.FC<Props> = ({ city_title, city_team }) => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>(
    // Array.from({ length: items.length }, () => null)
    Array.from({ length: city_team.length }, () => null)
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
    <section className="relative">
      <div className="lg:absolute z-[100] w-full top-0 justify-center flex flex-col">
        <Title className="mb-8">
          {/* MEET THE TEAM */}
          {city_title}
        </Title>

        <div className="grid justify-center grid-cols-1 gap-4 lg:grid-cols-3 place-content-center">
          {/* {items.map(({ id, name, description }, i) => (
            <Avatar
              key={i}
              ref={(e) => (itemsRef.current[i] = e)}
              id={id}
              name={name}
              description={description}
            />
          ))} */}
          {city_team &&
            city_team.map(
              (
                {
                  member_avatar,
                  member_description,
                  member_name,
                  member_social,
                },
                i
              ) => (
                <Avatar
                  key={i}
                  ref={(e) => (itemsRef.current[i] = e)}
                  id="1" // TODO
                  name={member_name}
                  description={member_description}
                  social={member_social}
                />
              )
            )}{" "}
        </div>
      </div>

      <CityBackground />
    </section>
  );
};
