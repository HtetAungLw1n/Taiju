import React from "react";
import Navbar from "../components/Navbar";
import Preview from "../pages/Preview";
import { Outlet } from "react-router-dom";

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
