import React from "react";
import { Link } from "react-router-dom";

const CurrentLink = () => {
  return (
    <div className="bg-cream border-2 border-night my-4 rounded-lg text-white1 p-4 flex justify-between items-center shadow">
      <div>
        <div className="md:text-xl">Name</div>
        <Link className="text-neutral-700">
          urldfkalsdfjkalsdjfdksalfjalksj;l
        </Link>
      </div>
      <div className="flex flex-col">
        <Link>edit</Link>
        <Link>delete</Link>
      </div>
    </div>
  );
};

export default CurrentLink;
