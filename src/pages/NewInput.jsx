import React from "react";
import { Form } from "react-router-dom";

const NewInput = () => {
  return (
    <div className="md:w-[70%] bg-white1 px-4 py-10 md:px-96 md:py-10">
      <Form className="bg-greendark rounded-lg border-2 p-8 pb-12">
        <div>
          <label
            htmlFor="linkName"
            className="font-semibold md:text-xl text-cream"
          >
            Link Name
          </label>
          <input
            type="url"
            className="border-2 block px-2 py-1 rounded-lg w-full mt-2"
          />
        </div>
        <button className="bg-cream border-2 rounded-lg px-4 py-1 mt-8 float-end">
          Done
        </button>
      </Form>
    </div>
  );
};

export default NewInput;
