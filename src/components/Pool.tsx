import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

import { PoolQuestion } from "../typings";
import { PoolBackground } from "./backgrounds/PoolBackground";
import { Question } from "./Question";
import { Title } from "./Title";

interface Props {
  pool_title: string;
  pool_questions: PoolQuestion[];
}

export const Pool: React.FC<Props> = ({ pool_title, pool_questions }) => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>(
    Array.from({ length: pool_questions.length }, () => null)
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
      <div className="lg:absolute z-[100] w-full top-[10%] flex flex-col items-center">
        <Title className="mb-8">
          {/* FAQ */}
          {pool_title}
        </Title>

        <div className="flex flex-col gap-4">
          {pool_questions &&
            pool_questions.map(({ pool_question, pool_answer }, i) => (
              <Question
                key={i}
                ref={(e) => (itemsRef.current[i] = e)}
                question={pool_question}
                answer={pool_answer}
              />
            ))}
        </div>
      </div>

      <PoolBackground />
    </section>
  );
};
