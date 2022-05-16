import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  className?: string;
  children: string;
}

export const Markdown: React.FC<Props> = ({ className = "", children }) => {
  return (
    <ReactMarkdown
      className={`${className} marker:text-green-400 font-mono prose text-white prose-invert lg:prose-xl`}
      linkTarget="_blank"
    >
      {children}
    </ReactMarkdown>
  );
};
