import React from "react";

interface Props {
  className?: string;
}

export const Title: React.FC<Props> = ({ className = "", children }) => {
  return (
    <h1
      className={`${className} self-center italic font-bold text-center lg:max-w-3xl lg:text-8xl`}
    >
      {children}
    </h1>
  );
};
