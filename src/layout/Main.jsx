import React from "react";
import Navbar from "../components/Navbar";
import Preview from "../pages/Preview";
import { Outlet, redirect, useLoaderData } from "react-router-dom";

const Main = () => {
  const links = useLoaderData();

  return (
    <>
      <section className="h-screen flex flex-col">
        <Navbar />
        <div className="bg-greenlight md:flex flex-1">
          <Outlet />
          <Preview links={links} />
        </div>
      </section>
    </>
  );
};

export default Main;

// login win hrr lr ma win thar yin go to /welcome
export const loader = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return redirect("/welcome");
  }
  const response = await fetch(
    `https://taiju-2025-default-rtdb.firebaseio.com/${token}.json`
  );

  const result = await response.json();
  return result;
};
