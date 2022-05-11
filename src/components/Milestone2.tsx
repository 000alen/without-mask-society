import React from "react";

interface Props {
  percent: string;
  title: string;
  text: string;
}

export const Milestone2: React.FC<Props> = ({ percent, title, text }) => {
  return (
    <div className="flex items-center gap-8 px-4 py-2 m-6 bg-green-400 bg-opacity-50 rounded">
      <div>
        <p className="font-bold text-blue-400">{percent}</p>
      </div>
      <div>
        <h1 className="font-[Aliseo] text-xl max-w-lg italic break-words font-bold">
          {title}
        </h1>
        <p>{text.slice(140)}</p>
      </div>
    </div>
  );
};
