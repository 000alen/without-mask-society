import React, { PropsWithChildren } from "react";

import { OpenseaIcon } from "./icons/OpenseaIcon";

interface Props {
  className?: string;
  label: string;
  color?: string;
}

export const FancyButton = React.forwardRef<
  HTMLButtonElement,
  PropsWithChildren<Props>
>(({ className = "", label, color = "#e41388", children }, ref) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <button
      ref={ref}
      className={`${className} px-6 py-4 space-x-2 rounded-full`}
      style={style}
    >
      <span className="font-semibold">{label}</span>
      {children}
    </button>
  );
});
