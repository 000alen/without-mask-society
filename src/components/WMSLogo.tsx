import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  className?: string;
}

export const WMSLogo: React.FC<Props> = ({ className = "" }) => {
  return (
    <StaticImage
      className={`${className} z-[1000] select-none`}
      src="../images/logo.png"
      alt="Without Mask Society Logo"
    />
  );
};
