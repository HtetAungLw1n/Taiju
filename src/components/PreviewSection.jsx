import React from "react";
import PreviewLink from "./PreviewLink";

const PreviewSection = ({ links }) => {
  const name = localStorage.getItem("token");
  return (
    <section className="h-full w-full bg-greendark flex flex-col items-center">
      <div className="mt-20 text-2xl font-semibold text-cream">{name}</div>
      <div className="mt-8 w-full px-10 overflow-scroll hide-scrollbar">
        {Object.entries(links)
          .slice(1)
          .map(([key, value]) => (
            <PreviewLink key={key} value={value} id={key} />
          ))}
      </div>
    </section>
  );
};

export default PreviewSection;
