import React from "react";
import profileImg from "../assets/welcome.png";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <div className="md:w-[70%] bg-white1 p-8 md:px-96 md:py-20">
      {/* name  */}
      <div className="flex gap-10 items-center">
        <img
          src={profileImg}
          alt="img"
          className="w-20 h-20 object-cover rounded-full"
        />
        <div>
          <div className="text-xl font-semibold">Htet Aung Lwin</div>
          <Link className="text-neutral-700">edit name</Link>
        </div>
      </div>
      <div className="my-10">
        {/* bgColor  */}
        <div className="mb-8 flex items-center">
          <div className="w-44">
            <label htmlFor="bgColor" className="mr-10">
              Background Color
            </label>
            <div className="text-neutral-700">#kfldgjl</div>
          </div>
          <input
            type="color"
            name="bgColor"
            id="bgColor"
            className="h-10 w-10"
          />
        </div>

        {/* borderColor  */}
        <div className="mb-8 flex items-center">
          <div className="w-44">
            <label htmlFor="borderColor">Border Color</label>
            <div className="text-neutral-700">#kfldgjl</div>
          </div>
          <input
            type="color"
            name="borderColor"
            id="borderColor"
            className="h-10 w-10"
          />
        </div>

        {/* border style  */}
        <div>
          <div className="mb-2">Border Style</div>
          <input
            type="radio"
            name="borderStyle"
            id="rounded"
            className="mr-2"
          />
          <label htmlFor="borderStyle" className="mr-4">
            Rounded
          </label>
          <input type="radio" name="borderStyle" id="smooth" className="mr-2" />
          <label htmlFor="borderStyle" className="mr-4">
            Smooth
          </label>
          <input type="radio" name="borderStyle" id="square" className="mr-2" />
          <label htmlFor="borderStyle" className="mr-4">
            Square
          </label>
        </div>

        {/* button  */}
        <div className="flex flex-col mt-10 gap-4 md:w-1/2">
          <button className="bg-cream border-2 rounded px-4 py-2">Save</button>
          <button className="px-4 py-2">Change Password</button>
          <button className="text-red-700 rounded px-4 py-2">Log Out</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Setting;
