import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";

// import gsap from "gsap";
// import P from "../../images/city/P.png";
// import PR from "../../images/city/PR.png";
// import B from "../../images/city/city.png";

export const CityBackground = () => {
  // useEffect(() => {
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#city-background",
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
    <div id="city-background">
      {/* <div>
        <StaticImage
          className="!absolute z-50 w-[34.3%] left-[5.9%] top-[60.2%]"
          src="../../images/city/P1.png"
          alt=""
        />

        <StaticImage
          className="!absolute z-50 w-[34.5%] left-[4.1%] top-[60.6%]"
          src="../../images/city/R1.png"
          alt=""
        />
      </div>

      <div>
        <StaticImage
          className="!absolute peer z-50 w-[30.2%] left-[28.1%] top-[57.9%]"
          src="../../images/city/P2.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer z-50 w-[30.1%] left-[28.4%] top-[67%]"
          src="../../images/city/R2.png"
          alt=""
        />
      </div>

      <div>
        <StaticImage
          className="!absolute peer z-50 w-[31.2%] left-[54.3%] top-[59.8%]"
          src="../../images/city/P3.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer z-50 w-[31.4%] left-[54.4%] top-[68.7%]"
          src="../../images/city/R3.png"
          alt=""
        />
      </div> */}

      <StaticImage
        className="top-0 left-0 w-full"
        src="../../images/city/static.png"
        alt=""
      />

      {/* <StaticImage
        className="!absolute z-50 bottom-0 w-full"
        src="../../images/city/P.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="top-0 left-0 w-full"
        src="../../images/city/city.png"
        alt=""
      /> */}

      {/* <img
        className="!absolute z-50 bottom-0 w-full parallax"
        src={P}
        alt=""
        data-depth="0.9"
      /> */}

      {/* <img
        className="!absolute z-50 bottom-0 w-full parallax"
        src={PR}
        alt=""
        data-depth="0.9"
      />

      <img
        className="top-0 left-0 w-full parallax"
        src={B}
        alt=""
        data-depth="0.1"
      /> */}
    </div>
  );
};
