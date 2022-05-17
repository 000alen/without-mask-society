import { Link } from "gatsby";
import React from "react";
import { v4 as uuid } from "uuid";

interface Props {
  id?: string;
  title: string;
  url: string;
}

export const BlogEntry = React.forwardRef<HTMLAnchorElement, Props>(
  ({ id, title, url }, ref) => {
    if (!id) id = uuid();

    return (
      <Link className="blog-entry" innerRef={ref} to={url}>
        {title}
      </Link>
    );
  }
);
