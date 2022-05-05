import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  className?: string;
}

export const Showcase: React.FC<Props> = ({ className = "" }) => {
  return (
    <div className={`${className} flex flex-row space-x-2`}>
      <StaticImage
        className="hover:glow transition-all w-48 h-auto"
        src="../images/nfts/1.png"
        alt=""
      />
      <StaticImage
        className="hover:glow transition-all w-48 h-auto"
        src="../images/nfts/2.png"
        alt=""
      />
      <StaticImage
        className="hover:glow transition-all w-48 h-auto"
        src="../images/nfts/3.png"
        alt=""
      />
      <StaticImage
        className="hover:glow transition-all w-48 h-auto"
        src="../images/nfts/4.png"
        alt=""
      />
    </div>
  );
};
