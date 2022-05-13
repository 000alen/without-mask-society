import React from "react";
import ReactMarkdown from "react-markdown";
import { v4 as uuid } from "uuid";

interface Props {
  id?: string;
  question: string;
  answer: string;
}

export const Question = React.forwardRef<HTMLDivElement, Props>(
  ({ id, question, answer }, ref) => {
    if (!id) id = uuid();

    return (
      <div ref={ref}>
        <input id={id} className="toggle" type="checkbox" />
        <label htmlFor={id} className="toggle-label">
          {question}
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            {/* <p>{answer}</p> */}
            <ReactMarkdown className="font-mono prose prose-invert lg:prose-xl">
              {answer}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
);
