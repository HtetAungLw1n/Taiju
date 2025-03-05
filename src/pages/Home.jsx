import React from "react";
import UserInput from "../components/UserInput";
import CurrentLink from "../components/CurrentLink";

const Home = () => {
  return (
    <div className="md:w-[70%] bg-white1 px-4 md:px-96 md:py-10">
      <UserInput />
      <CurrentLink />
      <CurrentLink />
      <CurrentLink />
      <CurrentLink />
      <CurrentLink />
    </div>
  );
};

export default Home;
