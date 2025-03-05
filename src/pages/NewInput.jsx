import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const NewInput = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmittin] = useState(false);

  // define state
  const [newLinkName, setNewLinkName] = useState("");
  const [newLink, setNewLink] = useState("");

  // post method
  const addLink = async (e) => {
    e.preventDefault();

    setIsSubmittin(true);
    const data = { name: newLinkName, link: newLink };

    try {
      const response = await fetch(
        "https://taiju-2025-default-rtdb.firebaseio.com/username.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response) {
        setNewLink("");
        setNewLinkName("");
        setIsSubmittin(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:w-[70%] bg-white1 px-4 py-10 md:px-96 md:py-10">
      <Form
        className="bg-greendark rounded-lg border-2 p-8 pb-12"
        onSubmit={addLink}
      >
        <div>
          <label
            htmlFor="linkName"
            className="font-semibold md:text-xl text-cream"
          >
            Name
          </label>
          <input
            type="text"
            className="border-2 block px-2 py-1 rounded-lg w-full mt-2"
            value={newLinkName}
            onChange={(e) => setNewLinkName(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="link" className="font-semibold md:text-xl text-cream">
            Link
          </label>
          <input
            type="url"
            className="border-2 block px-2 py-1 rounded-lg w-full mt-2"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
          />
        </div>
        <button className="bg-cream border-2 rounded-lg px-4 py-1 mt-8 float-end">
          {isSubmitting ? <Loading /> : "Done"}
        </button>
      </Form>
    </div>
  );
};

export default NewInput;
