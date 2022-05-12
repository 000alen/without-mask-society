import React from "react";

interface Props {
  className?: string;
  image?: string;
  children: string;
}

export const Paragraph = React.forwardRef<HTMLParagraphElement, Props>(
  ({ className = "", image, children }, ref) => {
    return (
      <div className="flex flex-row items-center gap-2 md:flex-col-reverse">
        {image && (
          <img
            className="w-32 transition-all border-2 border-green-400 border-solid rounded md:w-48 lg:w-64 hover:glow"
            src={image}
            alt=""
          />
        )}
        <p
          ref={ref}
          className={`${className} ${
            image ? "text-left" : "text-center"
          } max-w-2xl font-mono`}
        >
          {children}
        </p>
      </div>
    );
  }
);
