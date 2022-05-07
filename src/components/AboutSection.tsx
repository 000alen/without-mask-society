import React from "react";

import { Title } from "./Title";

export const AboutSection = () => {
  return (
    <>
      <div className="wave2"></div>

      <section className="bg-[#000067] flex flex-col items-center p-8 space-y-2">
        <Title>ABOUT</Title>

        <p className="max-w-2xl text-center">
          LOWER YOUR MASK AND TAKE A DEEP BREATH. <br />
          THE PANDEMIC FORCES MASK ON OUR FACES, MAKING US FEEL TRAPPED IN
          OURSELVES... BUT IT ALSO MADE US UNDERSTAND HOW MANY THINGS WE USUALLY
          TAKE FOR GRANTED, ONE OF THEM IS THE BEAUTY OF BREATHING
        </p>
      </section>
      <div className="wave2 flip"></div>
    </>
  );
};
