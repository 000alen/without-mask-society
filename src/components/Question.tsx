import React from "react";
import { v4 as uuid } from "uuid";

interface Props {
  id?: string;
  question: string;
  answer: string;
}

export const Question: React.FC<Props> = ({ id, question, answer }) => {
  if (!id) id = uuid();

  return (
    <div>
      <input id={id} className="toggle" type="checkbox" />
      <label htmlFor={id} className="toggle-label">
        {question}
      </label>
      <div className="collapsible-content">
        <div className="content-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};
