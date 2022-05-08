import React from "react";
import { v4 as uuid } from "uuid";

interface Props {
  id?: string;
  title: string;
  body: string;
}

export const BlogEntry = React.forwardRef<HTMLDivElement, Props>(
  ({ id, title, body }, ref) => {
    if (!id) id = uuid();

    return (
      <div ref={ref}>
        <input id={id} className="toggle" type="checkbox" />
        <label htmlFor={id} className="toggle-label">
          {title}
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>{body}</p>
          </div>
        </div>
      </div>
    );
  }
);
