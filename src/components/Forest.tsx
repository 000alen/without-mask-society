import React, { useRef } from "react";
import { lorem } from "../constants";

import { ForestMilestone } from "../typings";
import { ForestBackground } from "./backgrounds/ForestBackground";
import { Milestone2 } from "./Milestone2";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

interface Props {
  forest_title: string;
  forest_milestones: ForestMilestone[];
}

export const Forest: React.FC<Props> = ({
  forest_title,
  forest_milestones,
}) => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>(
    Array.from({ length: forest_milestones.length }, () => null)
  );

  return (
    <section className="grid" id="roadmap">
      <div
        className="z-10 flex flex-col items-center pb-96 lg:pb-0"
        style={{ gridArea: "1/1" }}
      >
        <Title>{forest_title}</Title>

        <Paragraph>{lorem}</Paragraph>

        <div className="flex flex-col gap-2 md:flex-row">
          <div className="grid justify-center grid-cols-1 gap-2 place-content-center">
            {forest_milestones &&
              forest_milestones.map(
                (
                  {
                    forest_milestone_title: title,
                    forest_milestone_text: text,
                  },
                  i
                ) => <Milestone2 percent="50%" title={title} text={text} />
              )}
          </div>
        </div>
      </div>

      <ForestBackground className="mt-auto mb-0" style={{ gridArea: "1/1" }} />
    </section>
  );
};
