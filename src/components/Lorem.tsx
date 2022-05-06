import React from "react";
import { Title } from "./Title";

interface Props {
  className?: string;
  top?: string;
}

export const Lorem: React.FC<Props> = ({ className = "", top = "35%" }) => {
  const style = {
    top: top,
  };

  return (
    <div
      style={style}
      className={`${className} lg:absolute z-[100] inset-x-0 flex justify-center`}
    >
      <div className="flex flex-col items-center p-8 space-y-2">
        <Title>LOREM</Title>

        <p className="max-w-2xl text-center">
          LOREM IPSUM DOLOR, SIT AMET CONSECTETUR ADIPISICING ELIT.
        </p>

        <p className="max-w-2xl text-center">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. FUGA, A
          DOLOREMQUE, BEATAE PARIATUR POSSIMUS TOTAM PROVIDENT VOLUPTATES, SUNT
          REPELLENDUS REPELLAT SIT SAPIENTE ERROR CUMQUE. QUAM BLANDITIIS
          PERFERENDIS LIBERO DICTA IUSTO!
        </p>
      </div>
    </div>
  );
};
