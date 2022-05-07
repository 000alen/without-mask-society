import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";

// import gsap from "gsap";
// import P from "../../images/forest/P.png";
// import B from "../../images/forest/forest.png";

export const ForestBackground = () => {
  // useEffect(() => {
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#forest-background",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });

  //   gsap.utils.toArray(".parallax").forEach((item) => {
  //     // @ts-ignore
  //     const depth = Number(item.dataset.depth);
  //     // @ts-ignore
  //     const movement = -(item.offsetHeight * depth);
  //     // @ts-ignore
  //     timeline.to(item, { y: movement, ease: "none" }, 0);
  //   });
  // }, []);

  return (
    <div id="forest-background">
      {/* <StaticImage
        className="!absolute z-50 w-[37.6%] left-0 top-[69.6%]"
        src="../../images/forest/P1.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-[49] w-[32.8%] left-[20.6%] top-[72.8%]"
        src="../../images/forest/P2.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-[48] w-[32.4%] left-[35.1%] top-[74%]"
        src="../../images/forest/P3.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-50 w-[37.8%] left-[46.2%] top-[70.4%]"
        src="../../images/forest/P4.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-[49] w-[31.9%] left-[68.3%] top-[72.3%]"
        src="../../images/forest/P5.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="w-full h-auto"
        src="../../images/forest/forest.png"
        alt=""
      /> */}

      <StaticImage
        className="w-full h-auto"
        src="../../images/forest/static.png"
        alt=""
      />
    </div>
  );
};
