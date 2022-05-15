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
      <div className="timeline__event__icon ">{icon}</div>
      <div className="timeline__event__content ">
        <div className="timeline__event__title">{title}</div>
        <div className="timeline__event__description">
          <Markdown className="!text-black">{description}</Markdown>
        </div>
      </div>
    </div>
  );
};
