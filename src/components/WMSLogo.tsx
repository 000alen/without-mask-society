import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  className?: string;
}

export const WMSLogo = React.forwardRef<unknown, Props>(
  ({ className = "" }, ref) => {
    return (
      <StaticImage
        className={`${className} select-none`}
        src="../images/WMSLogo.png"
        alt="Without Mask Society Logo"
      />
    );
  }
);
