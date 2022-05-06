import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";

import { lorem } from "../constants";
import { FancyButton } from "./FancyButton";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { RoadmapLeft } from "./RoadmapLeft";
import { RoadmapRight } from "./RoadmapRight";
import { Title } from "./Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const items = [
  {
    direction: "left",
    id: "1",
    title: "0%",
    paragraph: lorem,
    children: undefined,
  },
  {
    direction: "right",
    id: "2",
    title: "25%",
    paragraph: lorem,
    children: (
      <FancyButton label="Go to OpenSea">
        <OpenseaIcon />
      </FancyButton>
    ),
  },
  {
    direction: "left",
    id: "3",
    title: "50%",
    paragraph: lorem,
    children: undefined,
  },
  {
    direction: "right",
    id: "4",
    title: "75%",
    paragraph: lorem,
    children: undefined,
  },
  {
    direction: "left",
    id: "1",
    title: "100%",
    paragraph: lorem,
    children: undefined,
  },
];

export const Forest = () => {
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
      {/* <StaticImage
        className="!absolute z-50 w-[37.6%] left-0 top-[69.6%]"
        src="../images/forest/P1.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-[49] w-[32.8%] left-[20.6%] top-[72.8%]"
        src="../images/forest/P2.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-[48] w-[32.4%] left-[35.1%] top-[74%]"
        src="../images/forest/P3.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-50 w-[37.8%] left-[46.2%] top-[70.4%]"
        src="../images/forest/P4.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-[49] w-[31.9%] left-[68.3%] top-[72.3%]"
        src="../images/forest/P5.png"
        alt=""
      /> */}

      <div className="lg:absolute z-[100] w-full top-[10%] justify-center flex flex-col">
        <Title className="mb-8">ROADMAP</Title>

        {items.map(({ direction, id, title, paragraph, children }, i) =>
          direction === "left" ? (
            <RoadmapLeft
              key={i}
              ref={(e) => (itemsRef.current[i] = e)}
              className="gs_fromLeft"
              id={id}
              title={title}
              paragraph={paragraph}
            >
              {children}
            </RoadmapLeft>
          ) : (
            <RoadmapRight
              key={i}
              ref={(e) => (itemsRef.current[i] = e)}
              className="gs_fromRight"
              id={id}
              title={title}
              paragraph={paragraph}
            >
              {children}
            </RoadmapRight>
          )
        )}

        {/* <RoadmapLeft ref={itemsRef} id="1" title="0%" paragraph={lorem} />
        <RoadmapRight id="2" title="25%" paragraph={lorem}>
          <FancyButton label="Go to OpenSea">
            <OpenseaIcon />
          </FancyButton>
        </RoadmapRight>
        <RoadmapLeft id="3" title="50%" paragraph={lorem} />
        <RoadmapRight id="4" title="75%" paragraph={lorem} />
        <RoadmapLeft id="1" title="100%" paragraph={lorem} /> */}
      </div>

      {/* <StaticImage
        className="w-full h-auto"
        src="../images/forest/forest.png"
        alt=""
      /> */}

      <StaticImage
        className="w-full h-auto"
        src="../images/forest/static.png"
        alt=""
      />
    </section>
  );
};
