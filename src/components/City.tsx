import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";

import { Avatar } from "./Avatar";
import { Title } from "./Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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

export const City = () => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>(
    Array.from({ length: items.length }, () => null)
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
      {/* <div>
        <StaticImage
          className="!absolute z-50 w-[34.3%] left-[5.9%] top-[60.2%]"
          src="../images/city/P1.png"
          alt=""
        />

        <StaticImage
          className="!absolute z-50 w-[34.5%] left-[4.1%] top-[60.6%]"
          src="../images/city/R1.png"
          alt=""
        />
      </div>

      <div>
        <StaticImage
          className="!absolute peer z-50 w-[30.2%] left-[28.1%] top-[57.9%]"
          src="../images/city/P2.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer z-50 w-[30.1%] left-[28.4%] top-[67%]"
          src="../images/city/R2.png"
          alt=""
        />
      </div>

      <div>
        <StaticImage
          className="!absolute peer z-50 w-[31.2%] left-[54.3%] top-[59.8%]"
          src="../images/city/P3.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer z-50 w-[31.4%] left-[54.4%] top-[68.7%]"
          src="../images/city/R3.png"
          alt=""
        />
      </div> */}

      <div className="lg:absolute z-[100] w-full top-0 justify-center flex flex-col">
        <Title className="mb-8">MEET THE TEAM</Title>

        <div className="grid justify-center grid-cols-1 gap-4 lg:grid-cols-3 place-content-center">
          {items.map(({ id, name, description }, i) => (
            <Avatar
              key={i}
              ref={(e) => (itemsRef.current[i] = e)}
              id={id}
              name={name}
              description={description}
            />
          ))}
        </div>
      </div>

      {/* <StaticImage
        className="top-0 left-0 w-full"
        src="../images/city/city.png"
        alt=""
      /> */}

      <StaticImage
        className="top-0 left-0 w-full"
        src="../images/city/static.png"
        alt=""
      />
    </section>
  );
};
