import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  percent: string;
  text: string;
}

export const Milestone2: React.FC<Props> = ({ percent, text }) => {
  return (
    <div className="flex items-center max-w-xl gap-4 p-2 bg-green-400 bg-opacity-50 border-2 rounded">
      <p className="font-mono italic font-bold text-green-400">{percent}</p>

      {/* <p className="font-mono italic font-bold">{text}</p> */}

      <ReactMarkdown className="font-mono prose prose-invert lg:prose-xl">
        {text}
      </ReactMarkdown>
    </div>
  );
};
