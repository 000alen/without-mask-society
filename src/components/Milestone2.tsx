import React from "react";
import { Markdown } from "./Markdown";

interface Props {
  percent: string;
  text: string;
}

export const Milestone2: React.FC<Props> = ({ percent, text }) => {
  return (
    <div className="relative flex flex-col max-w-xl gap-4 p-2 bg-green-400 bg-opacity-50 border-2 rounded">
      <p className="absolute w-8 font-mono italic font-bold text-green-400 break-words -left-16">
        {percent}
      </p>

      {/* <p className="w-24 font-mono italic font-bold text-green-400">
        {percent}
      </p> */}
      <Markdown>{text}</Markdown>
    </div>
  );
};
