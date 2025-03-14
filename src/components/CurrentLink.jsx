import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiPencil, BiTrash } from "react-icons/bi";

const CurrentLink = ({ id, value }) => {
  const navigate = useNavigate();

  //delete
  const deleteBtn = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `https://taiju-2025-default-rtdb.firebaseio.com/${token}/${id}.json`,
      { method: "DELETE" }
    );
    if (response) {
      navigate("/");
    }
  };

  return (
    <div className="bg-cream border-2 border-night my-4 rounded-lg text-white1 p-4 flex justify-between items-center shadow">
      <article className="break-all w-[80%]">
        <div className="md:text-xl">{value.name}</div>
        <Link className="text-neutral-700">{value.link}</Link>
      </article>
      <div className="flex flex-col gap-2">
        <Link to={`/edit/${id}`}>
          <BiPencil className="text-lg" />
        </Link>
        <button onClick={deleteBtn} className="cursor-pointer">
          <BiTrash className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default CurrentLink;
