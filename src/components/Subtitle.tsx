import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Subtitle = React.forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<Props>
>(({ className = "", children }, ref) => {
  return (
    <h1
      ref={ref}
      className={`${className} max-w-3xl text-6xl italic font-bold`}
    >
      {children}
    </h1>
  );
});
