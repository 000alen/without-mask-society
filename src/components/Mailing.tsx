import React from "react";

import { FancyButton } from "./FancyButton";

export const Mailing = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 p-2 lg:flex-row lg:gap-4 lg:justify-center"
    >
      <p className="max-w-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        aspernatur libero sapiente nostrum eveniet qui deserunt.
      </p>

      <div className="flex flex-row gap-2">
        <input
          className="px-6 py-4 text-black rounded-full lg:w-96"
          placeholder="Get on the list! (email)"
        />

        <FancyButton label="Join" />
      </div>
    </div>
  );
});
