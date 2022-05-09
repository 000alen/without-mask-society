import React from "react";

interface Props {
  className?: string;
  children: string;
}

export const Paragraph = React.forwardRef<HTMLParagraphElement, Props>(
  ({ className = "", children }, ref) => {
    return (
      <p
        ref={ref}
        className={`${className} max-w-2xl text-center font-mono`}
      >
        {children}
      </p>
    );
  }
);
