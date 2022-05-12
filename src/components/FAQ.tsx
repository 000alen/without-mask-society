import React, { useEffect, useRef } from "react";
import { FAQQuestion } from "../typings";
import { Question } from "./Question";
import { Title } from "./Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface Props {
  faq_title: string;
  faq_questions: FAQQuestion[];
}

export const FAQ: React.FC<Props> = ({ faq_title, faq_questions }) => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>(
    Array.from({ length: faq_questions.length }, () => null)
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
    <section className="w-full" id="faq">
      <div className="flex flex-col items-center gap-2">
        <Title>{faq_title}</Title>

        <div className="flex flex-col gap-4">
          {faq_questions &&
            faq_questions.map(({ faq_question, faq_answer }, i) => (
              <Question
                key={i}
                ref={(e) => (itemsRef.current[i] = e)}
                question={faq_question}
                answer={faq_answer}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
