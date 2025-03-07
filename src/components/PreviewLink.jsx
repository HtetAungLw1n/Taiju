import React from "react";
import { Link } from "react-router-dom";

const PreviewLink = ({ value }) => {
  return (
    <section className="bg-cream w-full rounded-lg border-2 px-4 py-2 my-4 break-all">
      <div>{value.name}</div>
      <Link to="" className="text-neutral-700 text-sm">
        {value.link}
      </Link>
    </section>
  );
};

export default PreviewLink;
