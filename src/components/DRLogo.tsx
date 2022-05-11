import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  className?: string;
}

export const DRLogo = React.forwardRef<unknown, Props>(
  ({ className = "" }, ref) => {
    return (
      <StaticImage
        className={`${className} select-none`}
        src="../images/DRLogo.png"
        alt="Digital Rocket Logo"
      />
    );
  }
);
