import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { lorem } from "../constants";

import { ForestMilestone } from "../typings";
import { ForestBackground } from "./backgrounds/ForestBackground";
import { FancyButton } from "./FancyButton";
import { DiscordIcon } from "./icons/DiscordIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { Milestone } from "./Milestone";
import { Milestone2 } from "./Milestone2";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

interface Props {
  forest_title: string;
  forest_milestones: ForestMilestone[];
}

export const Forest: React.FC<Props> = ({
  forest_title,
  forest_milestones,
}) => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>(
    Array.from({ length: forest_milestones.length }, () => null)
  );

  // const hideItem = (item: HTMLDivElement) => {
  //   gsap.set(item, { autoAlpha: 0 });
  // };

  // function animateItem(item: HTMLDivElement, direction: number = 1) {
  //   let x = 0;
  //   let y = direction * 100;

  //   if (item.classList.contains("gs_fromLeft")) {
  //     x = -300;
  //     y = 0;
  //   } else if (item.classList.contains("gs_fromRight")) {
  //     x = 300;
  //     y = 0;
  //   }

  //   item.style.transform = "translate(" + x + "px, " + y + "px)";
  //   item.style.opacity = "0";

  //   gsap.fromTo(
  //     item,
  //     { x: x, y: y, autoAlpha: 0 },
  //     {
  //       duration: 1.25,
  //       x: 0,
  //       y: 0,
  //       autoAlpha: 1,
  //       ease: "expo",
  //       overwrite: "auto",
  //     }
  //   );
  // }

  // useEffect(() => {
  //   itemsRef.current!.forEach((item) => {
  //     hideItem(item!);

  //     ScrollTrigger.create({
  //       trigger: item,
  //       onEnter: () => {
  //         animateItem(item!);
  //       },
  //       onEnterBack: () => {
  //         animateItem(item!, -1);
  //         animateItem(item!, -1);
  //       },
  //       onLeave: () => {
  //         hideItem(item!);
  //       },
  //     });
  //   });
  // }, []);

  return (
    <section className="grid" id="roadmap">
      <div
        className="z-10 flex flex-col items-center pb-96 lg:pb-0"
        style={{ gridArea: "1/1" }}
      >
        <Title>{forest_title}</Title>

        <Paragraph>{lorem}</Paragraph>

        <div className="flex flex-col gap-2 md:flex-row">
          <div className="grid justify-center grid-cols-1 gap-2 place-content-center">
            {forest_milestones &&
              forest_milestones.map(
                (
                  {
                    forest_milestone_direction: direction,
                    forest_milestone_title: title,
                    forest_milestone_text: text,
                  },
                  i
                ) => <Milestone2 percent="50%" title={title} text={text} />
              )}
          </div>

          <img
            className="border-2 border-green-400 w-96"
            src={forest_milestones[0].forest_milestone_image}
            alt=""
          />
        </div>
      </div>

      <ForestBackground className="mt-auto mb-0" style={{ gridArea: "1/1" }} />
    </section>
  );
};
