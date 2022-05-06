import React from "react";

interface Props {
  className?: string;
}

export const Subtitle: React.FC<Props> = ({ className = "", children }) => {
  return (
    <h1 className={`${className} max-w-3xl text-6xl italic font-bold`}>
      {children}
    </h1>
  );
};
