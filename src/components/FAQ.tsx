import React from "react";

import { FAQQuestion } from "../typings";
import { Question } from "./Question";
import { Title } from "./Title";

interface Props {
  faq_title: string;
  faq_questions: FAQQuestion[];
}

export const FAQ: React.FC<Props> = ({ faq_title, faq_questions }) => {
  return (
    <section className="w-full" id="faq">
      <div className="flex flex-col items-center gap-2">
        <Title>{faq_title}</Title>

        <div className="flex flex-col gap-4">
          {faq_questions &&
            faq_questions.map(({ faq_question, faq_answer }, i) => (
              <Question key={i} question={faq_question} answer={faq_answer} />
            ))}
        </div>
      </div>
    </section>
  );
};
