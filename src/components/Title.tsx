import React, { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Title = React.forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<Props>
>(({ className = "", children }, ref) => {
  return (
    <h1
      ref={ref}
      className={`${className} font-[Aliseo] text-xl max-w-lg self-center italic break-words font-bold text-center lg:max-w-3xl lg:text-6xl`}
    >
      {children}
    </h1>
  );
});
