import React from "react";
import PreviewSection from "../components/PreviewSection";
import { useLoaderData } from "react-router-dom";

const PreviewMobile = () => {
  const links = useLoaderData();

  return (
    <div className="mx-auto mt-20">
      <div className="flex items-center justify-center h-full shadow">
        <div className="relative w-80 h-[600px] bg-night rounded-[50px] shadow-2xl  flex flex-col items-center p-2">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-night rounded-xl"></div>

          {/* this is screen  */}
          <div className="w-full h-full bg-greendark rounded-[40px] overflow-hidden flex items-center justify-center">
            <PreviewSection links={links} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewMobile;

export const loader = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `https://taiju-2025-default-rtdb.firebaseio.com/${token}.json`
  );

  const result = await response.json();
  return result;
};
