import React from "react";

import { Title } from "./Title";

interface Props {
  className?: string;
  top?: string;
  title?: string;
  text?: string;
}

export const Lorem: React.FC<Props> = ({
  className = "",
  top = "35%",
  title = "Lorem",
  text = "Lorem",
}) => {
  const style = {
    top: top,
  };

  return (
    <div
      style={style}
      className={`${className} lg:absolute z-[100] inset-x-0 flex justify-center`}
    >
      <div className="flex flex-col items-center p-8 space-y-2">
        <Title>
          {/* LOREM */}
          {title}
        </Title>

        <p className="max-w-2xl text-center">
          {/* LOREM IPSUM DOLOR, SIT AMET CONSECTETUR ADIPISICING ELIT. <br />
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. FUGA, A
          DOLOREMQUE, BEATAE PARIATUR POSSIMUS TOTAM PROVIDENT VOLUPTATES, SUNT
          REPELLENDUS REPELLAT SIT SAPIENTE ERROR CUMQUE. QUAM BLANDITIIS
          PERFERENDIS LIBERO DICTA IUSTO! */}
          {text}
        </p>
      </div>
    </div>
  );
};
