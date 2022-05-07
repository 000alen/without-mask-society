import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

import { ForestMilestone } from "../typings";
import { ForestBackground } from "./backgrounds/ForestBackground";
import { FancyButton } from "./FancyButton";
import { DiscordIcon } from "./icons/DiscordIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { RoadmapLeft } from "./RoadmapLeft";
import { RoadmapRight } from "./RoadmapRight";
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
      <div className="lg:absolute z-[100] w-full top-[10%] justify-center flex flex-col">
        <Title className="mb-8">
          {/* ROADMAP */}
          {forest_title}
        </Title>

        {forest_milestones &&
          forest_milestones.map(
            (
              {
                forest_milestone_direction,
                forest_milestone_title,
                forest_milestone_text,
                forest_milestone_buttons,
              },
              i
            ) =>
              forest_milestone_direction === "left" ? (
                <RoadmapLeft
                  key={i}
                  ref={(e) => (itemsRef.current[i] = e)}
                  className="gs_fromLeft"
                  id="1" // TODO
                  title={forest_milestone_title}
                  paragraph={forest_milestone_text}
                >
                  {forest_milestone_buttons &&
                    forest_milestone_buttons.map(
                      ({
                        forest_milestone_button_color,
                        forest_milestone_button_icon,
                        forest_milestone_button_text,
                        forest_milestone_button_url,
                      }) => (
                        <FancyButton
                          label={forest_milestone_button_text}
                          color={forest_milestone_button_color}
                        >
                          {forest_milestone_button_icon === "opensea" ? (
                            <OpenseaIcon />
                          ) : forest_milestone_button_icon === "discord" ? (
                            <DiscordIcon />
                          ) : null}
                        </FancyButton>
                      )
                    )}
                </RoadmapLeft>
              ) : (
                <RoadmapRight
                  key={i}
                  ref={(e) => (itemsRef.current[i] = e)}
                  className="gs_fromRight"
                  id="1" // TODO
                  title={forest_milestone_title}
                  paragraph={forest_milestone_text}
                >
                  {forest_milestone_buttons &&
                    forest_milestone_buttons.map(
                      ({
                        forest_milestone_button_color,
                        forest_milestone_button_icon,
                        forest_milestone_button_text,
                        forest_milestone_button_url,
                      }) => (
                        <FancyButton
                          label={forest_milestone_button_text}
                          color={forest_milestone_button_color}
                        >
                          {forest_milestone_button_icon === "opensea" ? (
                            <OpenseaIcon />
                          ) : forest_milestone_button_icon === "discord" ? (
                            <DiscordIcon />
                          ) : null}
                        </FancyButton>
                      )
                    )}
                </RoadmapRight>
              )
          )}
      </div>
      <ForestBackground />
    </section>
  );
};
