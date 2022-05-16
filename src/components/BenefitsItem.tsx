import React from "react";
import { Markdown } from "../components/Markdown";

interface Props {
  className?: string;
  title: string;
  text: string;
  icon: string;
}

export const BenefitsItem = React.forwardRef<HTMLDivElement, Props>(
  ({ className = "", title, text, icon }, ref) => {
    return (
      <div
        ref={ref}
        className={`timeline__event overflow-hidden text-ellipsis h-48 max-h-48 ${className}`}
      >
        {/* <div className="font-mono bg-green-400 timeline__event__icon before:bg-green-400 after:bg-green-400">
          {icon}
        </div> */}
        <div className="timeline__event__content">
          <div className="text-[#e41388] font-[Aliseo] font-bold uppercase text-lg">
            {title}
          </div>
          <div className="timeline__event__description">
            <Markdown className="!text-black">{text}</Markdown>
          </div>
        </div>
      </div>
    );
  }
);
