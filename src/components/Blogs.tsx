import React, { useEffect, useRef } from "react";
import { lorem } from "../constants";
import { BlogEntry } from "./BlogEntry";
import { Question } from "./Question";
import { Title } from "./Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { graphql, useStaticQuery } from "gatsby";
import { useBlogEntries } from "./useBlogEntries";

export const Blogs = () => {
  const blogEntries = useBlogEntries();

  const itemsRef = useRef<Array<HTMLAnchorElement | null>>(
    Array.from({ length: blogEntries.length }, () => null)
  );

  const hideItem = (item: HTMLAnchorElement) => {
    gsap.set(item, { autoAlpha: 0 });
  };

  function animateItem(item: HTMLAnchorElement, direction: number = 1) {
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
    <section className="mb-24" id="blogs">
      <div className="z-[100] flex justify-center">
        <div className="flex flex-col items-center gap-2 p-8">
          <Title>BLOGS</Title>

          <div className="flex flex-col gap-4">
            {blogEntries.map(({ title, date, path }, i) => (
              <BlogEntry
                key={i}
                ref={(e) => (itemsRef.current[i] = e)}
                title={title}
                url={`/blog/${path}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
