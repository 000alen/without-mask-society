import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

import { ForestMilestone } from "../typings";
import { ForestBackground } from "./backgrounds/ForestBackground";
import { FancyButton } from "./FancyButton";
import { DiscordIcon } from "./icons/DiscordIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { Milestone } from "./Milestone";
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
    <section className="grid" id="roadmap">
      <div
        className="z-[100] pb-96 lg:pb-0 items-center flex flex-col"
        style={{ gridArea: "1/1" }}
      >
        <Title>{forest_title}</Title>

        <div className="grid justify-center grid-cols-1 gap-2 place-content-center">
          {forest_milestones &&
            forest_milestones.map(
              (
                {
                  forest_milestone_direction: direction,
                  forest_milestone_title: title,
                  forest_milestone_text: text,
                  forest_milestone_buttons: buttons,
                  forest_milestone_image: image,
                },
                i
              ) => (
                <Milestone
                  key={i}
                  ref={(e) => (itemsRef.current[i] = e)}
                  className={
                    direction === "left" ? "gs_fromLeft" : "gs_fromRight"
                  }
                  // direction={direction}
                  image={image}
                  title={title}
                  paragraph={text}
                >
                  {buttons &&
                    buttons.map(
                      (
                        {
                          forest_milestone_button_color: color,
                          forest_milestone_button_icon: icon,
                          forest_milestone_button_text: text,
                          forest_milestone_button_url: url,
                        },
                        j
                      ) => (
                        <FancyButton
                          key={j}
                          label={text}
                          color={color}
                          url={url}
                        >
                          {icon === "opensea" ? (
                            <OpenseaIcon />
                          ) : icon === "discord" ? (
                            <DiscordIcon />
                          ) : null}
                        </FancyButton>
                      )
                    )}
                </Milestone>
              )
            )}
        </div>
      </div>

      <ForestBackground className="mt-auto mb-0" style={{ gridArea: "1/1" }} />
    </section>
  );
};
