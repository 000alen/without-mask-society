import { OutboundLink } from "gatsby-plugin-google-gtag";
import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
  label: string;
  url?: string;
  color?: string;
}

export const FancyButton = React.forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<Props>
>(({ className = "", label, url, color = "#e41388", children }, ref) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <OutboundLink
      className={`${className} px-6 py-4 space-x-2 rounded-full hover:opacity-70 transition-all`}
      style={style}
      href={url}
      target="_blank"
    >
      <span className="font-semibold">{label}</span>
      {children}
    </OutboundLink>
  );
});
