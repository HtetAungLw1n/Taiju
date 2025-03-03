import React from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const Main = () => {
  return (
    <>
      <section className="h-screen flex flex-col">
        <Navbar />
        <div className="bg-white1 md:flex flex-1">
          <Home />
          <div className="hidden md:block md:w-[30%]">preview</div>
        </div>
      </section>
    </>
  );
};

export default Main;
