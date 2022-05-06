import React from "react";
import { FancyButton } from "./FancyButton";

export const Mailing = () => {
  return (
    <div className="flex flex-col p-2 space-y-2 items-center lg:flex-row lg:space-x-4 lg:justify-center">
      <p className="max-w-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        aspernatur libero sapiente nostrum eveniet qui deserunt.
      </p>

      <div className="flex flex-row space-x-2">
        <input
          className="px-6 py-4 rounded-full text-black lg:w-96"
          placeholder="Get on the list! (email)"
        />

        <FancyButton label="Join" />
      </div>
    </div>
  );
};
