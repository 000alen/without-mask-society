import React from "react";

import { BlogEntry } from "./BlogEntry";
import { Title } from "./Title";
import { useBlogEntries } from "./useBlogEntries";

export const Blog = () => {
  const blogEntries = useBlogEntries();

  return (
    <section className="w-full" id="blog">
      <div className="flex flex-col items-center gap-2">
        <Title>BLOGS</Title>

        <div className="flex flex-col gap-4">
          {blogEntries.map(({ title, date, path }, i) => (
            <BlogEntry key={i} title={title} url={`/blog/${path}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
