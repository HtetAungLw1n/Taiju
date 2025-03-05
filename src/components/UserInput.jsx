import React from "react";
import { Link } from "react-router-dom";

const UserInput = () => {
  return (
    <div className="bg-greendark my-8 rounded-lg text-cream text-center px-4 py-2 md:text-xl border-2 border-night">
      <Link to={"/newLink"}>Add New Link</Link>
    </div>
  );
};

export default UserInput;
