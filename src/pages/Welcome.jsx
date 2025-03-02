import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/welcome.png";

const Welcome = () => {
  return (
    <section className="h-screen relative text-deepgreen">
      {/* this is small  */}
      <div className="md:hidden h-full">
        <img src={image} alt="image" className="h-[80%] object-cover" />

        <div className="absolute bg-green1 border-t-4 border-deepgreen w-full bottom-0 h-1/3 rounded-t-2xl flex flex-col justify-center items-center gap-8">
          <div className="text-center">
            <div className="uppercase text-3xl font-semibold mb-2">
              Welcome to Taiju
            </div>
            <div className="font-semibold">A place where all are link</div>
          </div>
          <div className="flex flex-col w-full items-center">
            <Link
              to={"/login"}
              className="bg-white2  mb-4 text-center w-[70%] py-3 rounded-xl border-2 border-deepgreen shadow-lg font-semibold"
            >
              Login
            </Link>
            <Link
              to={"/signin"}
              className="bg-white2 text-center w-[70%] py-3 rounded-xl border-2 border-deepgreen shadow-lg font-semibold"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* this is big  */}
      <div className="hidden md:block">
        <img
          src={image}
          alt="image"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bg-green1 border-4 border-deepgreen w-[25%] top-[25%] left-[50%] -translate-x-1/2 rounded-2xl flex flex-col justify-center items-center py-12 gap-8">
          <div className="text-center">
            <div className="uppercase text-4xl font-semibold mb-2">
              Welcome to Taiju
            </div>
            <div className="font-semibold">A place where all are link</div>
          </div>
          <div className="flex flex-col w-full items-center">
            <Link
              to={"/login"}
              className="bg-white2 mb-4 text-center w-[70%] py-3 rounded-xl border-2 border-deepgreen shadow-lg font-semibold hover:bg-white1 transition duration-200"
            >
              Login
            </Link>
            <Link
              to={"/signin"}
              className="bg-white2 text-center w-[70%] py-3 rounded-xl border-2 border-deepgreen shadow-lg font-semibold hover:bg-white1 transition duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
