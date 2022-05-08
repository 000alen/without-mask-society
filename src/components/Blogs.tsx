import React, { useEffect, useRef } from "react";
import { lorem } from "../constants";
import { BlogEntry } from "./BlogEntry";
import { Lorem } from "./Lorem";
import { Question } from "./Question";
import { Title } from "./Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const items = [
  {
    title: "Blog 1",
    body: lorem,
  },
  {
    title: "Blog 2",
    body: lorem,
  },
  {
    title: "Blog 3",
    body: lorem,
  },
];

export const Blogs = () => {
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
    <section className="mb-24">
      <div className="z-[100] flex justify-center">
        <div className="flex flex-col items-center gap-2 p-8">
          <Title>BLOGS</Title>

          <div className="flex flex-col gap-4">
            {items.map(({ title, body }, i) => (
              <BlogEntry
                key={i}
                ref={(e) => (itemsRef.current[i] = e)}
                title={title}
                body={body}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
