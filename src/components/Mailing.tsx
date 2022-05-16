import React from "react";

import { FancyButton } from "./FancyButton";
import { Paragraph } from "./Paragraph";

interface Props {
  text: string;
}

export const Mailing = React.forwardRef<HTMLDivElement, Props>(
  ({ text }, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-col items-center gap-2 p-2 lg:flex-row lg:gap-4 lg:justify-center"
      >
        <Paragraph>{text}</Paragraph>
        <div className="flex flex-row gap-2">
          <input
            className="px-6 py-4 text-black rounded-full lg:w-96"
            placeholder="Get on the list! (email)"
          />

          <FancyButton label="Join" />
        </div>
      </div>
    );
  }
);
