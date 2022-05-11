import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const PlanetsBackground = () => {
  return (
    <>
      {/* <StaticImage
        className="!absolute w-[24.5%] left-[7.1%] top-[48.9%]"
        src="../../images/planets/P1.png"
        alt=""
  /> */}

      {/* <StaticImage
        className="!absolute w-[29.9%] left-[29.5%] top-[47%]"
        src="../../images/planets/P2.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="!absolute w-[40.1%] left-[50.5%] top-[46.9%]"
        src="../../images/planets/P3.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="!absolute w-[87.7%] left-[4.7%] top-[7.1%]"
        src="../../images/planets/moons.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="w-full h-auto"
        src="../../images/planets/planets.png"
        alt=""
      /> */}

      <StaticImage
        className="w-full -z-10"
        src="../../images/planets/static.png"
        alt=""
      />
    </>
  );
};
