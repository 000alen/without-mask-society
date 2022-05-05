import React from "react";

interface Props {
  top?: string;
}

export const Lorem: React.FC<Props> = ({ top = "35%" }) => {
  const style = {
    top: top,
  };

  return (
    <div
      style={style}
      className="absolute z-[100] inset-x-0 flex justify-center"
    >
      <div className="bg-[#000067] p-8 rounded-lg glow flex flex-col items-center space-y-2">
        <h1 className="text-7xl font-bold italic">LOREM</h1>

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
