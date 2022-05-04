import React from "react";
import { OpenseaIcon } from "./icons/OpenseaIcon";

interface Props {
  className?: string;
  label: string;
  color?: string;
}

export const FancyButton: React.FC<Props> = ({
  className = "",
  label,
  color = "#e41388",
  children,
}) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <button
      className={`${className} px-6 py-4 space-x-2 rounded-full`}
      style={style}
    >
      <span className="font-semibold">{label}</span>
      {children}
    </button>
  );
};
