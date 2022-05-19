import React from "react";

interface Props {
  id?: string;
}

export const Blob = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Props>
>(({ id, children }, ref) => {
  return (
    <div ref={ref}>
      <div className="-mt-12 wave2 md:-mt-36 lg:-mt-72"></div>

      <section
        className="bg-[#000067] flex flex-col p-4 items-center gap-2"
        id={id}
      >
        {children}
      </section>

      <div className="-mb-12 wave2 flip md:-mb-36 lg:-mb-72"></div>
    </div>
  );
});
