import React from "react";

import { Markdown } from "../components/Markdown";

interface Props {
  title: string;
  text: string;
}

export const BenefitsItem = React.forwardRef<HTMLDivElement, Props>(
  ({ title, text }, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-col overflow-hidden text-ellipsis max-h-48"
      >
        <div className="w-full p-4 bg-white rounded shadow">
          <div className="text-[#e41388] font-[Aliseo] font-bold uppercase text-lg">
            {title}
          </div>
          <div>
            <Markdown className="!text-black">{text}</Markdown>
          </div>
        </div>
      </div>
    );
  }
);
