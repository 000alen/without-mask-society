import React from "react";
import { BlogEntry } from "./BlogEntry";
import { Lorem } from "./Lorem";
import { Question } from "./Question";
import { Title } from "./Title";

export const Blogs = () => {
  return (
    <section className="mb-24">
      <div className="z-[100] flex justify-center">
        <div className="flex flex-col items-center gap-2 p-8">
          <Title>BLOGS</Title>

          <div className="flex flex-col gap-4">
            <BlogEntry
              title="What is Lorem Ipsum?"
              body="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <BlogEntry
              title="What is Lorem Ipsum?"
              body="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <BlogEntry
              title="What is Lorem Ipsum?"
              body="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
