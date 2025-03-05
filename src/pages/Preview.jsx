import React from "react";

const Preview = () => {
  return (
    <div className="hidden md:block md:w-[30%] ">
      <div className="flex items-center justify-center h-full shadow">
        <div className="relative w-80 h-[600px] bg-night rounded-[50px] shadow-2xl  flex flex-col items-center p-2">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-night rounded-xl"></div>

          {/* this is screen  */}
          <div className="w-full h-full bg-greendark rounded-[40px] overflow-hidden flex items-center justify-center">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
