import React from "react";
import Navbar from "../components/Navbar";
import Preview from "../pages/Preview";
import { Outlet, redirect } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section className="h-screen flex flex-col">
        <Navbar />
        <div className="bg-greenlight md:flex flex-1">
          <Outlet />
          <Preview />
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

  return null;
};
