import React from "react";
import UserInput from "../components/UserInput";
import CurrentLink from "../components/CurrentLink";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const links = useLoaderData();

  return (
    <div className="md:w-[70%] px-4 md:px-96 md:py-10">
      <UserInput />

      {Object.entries(links)
        .slice(1)
        .map(([key, value]) => (
          <CurrentLink key={key} value={value} id={key} />
        ))}
    </div>
  );
};

export default Home;

export const loader = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `https://taiju-2025-default-rtdb.firebaseio.com/${token}.json`
  );

  const result = await response.json();
  return result;
};
