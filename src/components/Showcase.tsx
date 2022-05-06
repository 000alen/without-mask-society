import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";

import { Title } from "./Title";

interface Props {
  className?: string;
}

// ! TODO Make it a carousel for sm and md screens
export const Showcase: React.FC<Props> = ({ className = "" }) => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <div
        className={`${className} hidden lg:flex flex-col space-y-2 lg:flex-row lg:space-x-2`}
      >
        <StaticImage
          className="w-48 h-auto transition-all hover:glow"
          src="../images/nfts/1.png"
          alt=""
        />
        <StaticImage
          className="w-48 h-auto transition-all hover:glow"
          src="../images/nfts/2.png"
          alt=""
        />
        <StaticImage
          className="w-48 h-auto transition-all hover:glow"
          src="../images/nfts/3.png"
          alt=""
        />
        <StaticImage
          className="w-48 h-auto transition-all hover:glow"
          src="../images/nfts/4.png"
          alt=""
        />
      </div>

      <Title className={`${className} mb-8 lg:hidden`}>SHOWCASE</Title>

      <div className="relative lg:hidden slideshow-container">
        <div className={`${index === 0 ? "block" : "slide"} fade`}>
          <StaticImage
            className="w-48 h-auto transition-all hover:glow"
            src="../images/nfts/1.png"
            alt=""
          />
        </div>

        <div className={`${index === 1 ? "block" : "slide"} fade`}>
          <StaticImage
            className="w-48 h-auto transition-all hover:glow"
            src="../images/nfts/2.png"
            alt=""
          />
        </div>

        <div className={`${index === 2 ? "block" : "slide"} fade`}>
          <StaticImage
            className="w-48 h-auto transition-all hover:glow"
            src="../images/nfts/3.png"
            alt=""
          />
        </div>

        <div className={`${index === 3 ? "block" : "slide"} fade`}>
          <StaticImage
            className="w-48 h-auto transition-all hover:glow"
            src="../images/nfts/4.png"
            alt=""
          />
        </div>

        <a className="prev" onClick={() => setIndex((p) => (p - 1) % 4)}>
          &#10094;
        </a>
        <a className="next" onClick={() => setIndex((p) => (p + 1) % 4)}>
          &#10095;
        </a>
      </div>
    </>
  );
};
