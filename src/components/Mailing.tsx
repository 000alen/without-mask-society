import React from "react";
import { FancyButton } from "./FancyButton";

export const Mailing = () => {
  return (
    <div className="flex flex-row justify-center space-x-4">
      <p className="max-w-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        aspernatur libero sapiente nostrum eveniet qui deserunt.
      </p>
      <div className="flex flex-row space-x-2">
        <input
          className="px-6 py-4 w-96 rounded-full text-black"
          placeholder="Get on the list! (email)"
        />

        <FancyButton label="Join" />
      </div>
    </div>
  );
};
