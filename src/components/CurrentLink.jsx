import React from "react";
import { Link } from "react-router-dom";
import { BiPencil, BiTrash } from "react-icons/bi";

const CurrentLink = () => {
  return (
    <div className="bg-cream border-2 border-night my-4 rounded-lg text-white1 p-4 flex justify-between items-center shadow">
      <div>
        <div className="md:text-xl">Name</div>
        <Link className="text-neutral-700">
          urldfkalsdfjkalsdjfdksalfjalksj;l
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link>
          <BiPencil className="text-lg" />
        </Link>
        <Link>
          <BiTrash className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default CurrentLink;
