import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Lorem } from "./Lorem";
import { Question } from "./Question";
import { RoadmapLeft } from "./RoadmapLeft";
import { RoadmapRight } from "./RoadmapRight";

export const Pool = () => {
  return (
    <section className="relative">
      {/* <StaticImage
        className="!absolute z-50 w-[6.3%] left-[40.2%] top-[55.8%]"
        src="../images/pool/P1.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-50 w-[82.9.8%] left-[0.4%] top-[66.8%]"
        src="../images/pool/P2.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-50 w-[12%] left-[63.7%] top-[40.6%]"
        src="../images/pool/P3.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-[49] w-[43.6%] left-[56.3%] top-[63.5%]"
        src="../images/pool/P4.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-50 w-[17.2%] left-[72.5%] top-[53.5%]"
        src="../images/pool/P5.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-[48] w-[22.3%] left-[49.2%] top-[54.4%]"
        src="../images/pool/P6.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-50 w-[18.5%] left-[11.8%] top-[56.5%]"
        src="../images/pool/P7.png"
        alt=""
      /> */}

      <div className="absolute z-[100] w-full top-[10%] flex flex-col items-center">
        <h1 className="mb-8 text-8xl max-w-3xl font-bold italic text-center">
          FAQ
        </h1>

        <div className="flex flex-col space-y-4">
          <Question question="What is lorem ipsum?" answer="AAA" />
          <Question question="What is lorem ipsum ii?" answer="AAA" />
          <Question question="What is lorem ipsum iii?" answer="AAA" />
        </div>
      </div>

      {/* <StaticImage
        className="w-full h-auto"
        src="../images/pool/pool.png"
        alt=""
      /> */}

      <StaticImage
        className="w-full h-auto"
        src="../images/pool/static.png"
        alt=""
      />
    </section>
  );
};
