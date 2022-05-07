import React, { useEffect, useRef } from "react";
import { PoolBackground } from "./backgrounds/PoolBackground";
import { Question } from "./Question";
import { Title } from "./Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const items = [
  {
    question: "What is the name of the pool?",
    answer: "The Pool",
  },
  {
    question: "What is the size of the pool?",
    answer: "100m x 100m",
  },
  {
    question: "What is the depth of the pool?",
    answer: "100m",
  },
];

export const Pool = () => {
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
      <div className="lg:absolute z-[100] w-full top-[10%] flex flex-col items-center">
        <Title className="mb-8">FAQ</Title>

        <div className="flex flex-col space-y-4">
          {items.map(({ question, answer }, i) => (
            <Question
              key={i}
              ref={(e) => (itemsRef.current[i] = e)}
              question={question}
              answer={answer}
            />
          ))}
        </div>
      </div>

      <PoolBackground />
    </section>
  );
};
