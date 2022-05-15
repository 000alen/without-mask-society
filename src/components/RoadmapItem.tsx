import React from "react";
import { Markdown } from "../components/Markdown";

interface RoadmapItemProps {
  className?: string;
  title: string;
  description: string;
  icon: string;
}

export const RoadmapItem: React.FC<RoadmapItemProps> = ({
  className = "",
  title,
  description,
  icon,
}) => {
  return (
    <div
      className={`timeline__event overflow-hidden text-ellipsis h-48 max-h-48 ${className}`}
    >
      <div className="bg-green-400 timeline__event__icon before:bg-green-400 after:bg-green-400">
        {icon}
      </div>
      <div className="timeline__event__content">
        <div className="text-[#e41388] font-[Aliseo] font-bold uppercase text-lg">
          {title}
        </div>
        <div className="timeline__event__description">
          <Markdown className="!text-black">{description}</Markdown>
        </div>
      </div>
    </div>
  );
};
