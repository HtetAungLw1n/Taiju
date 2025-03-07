import React, { useState } from "react";
import { Form, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Edit = () => {
  const [isSubmitting, setIsSubmittin] = useState(false);

  const previousData = useLoaderData();

  const navigate = useNavigate();
  const params = useParams();

  // define state
  const [newLinkName, setNewLinkName] = useState(previousData.name);
  const [newLink, setNewLink] = useState(previousData.link);

  const editLink = async (e) => {
    e.preventDefault();

    setIsSubmittin(true);
    const data = { name: newLinkName, link: newLink };

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `https://taiju-2025-default-rtdb.firebaseio.com/${token}/${params.id}.json`,
        {
          method: "PATCH",
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
    <>
      <div className="md:w-[70%] px-4 py-8 md:px-96 md:py-10">
        <Form
          className="bg-greendark rounded-lg border-2 p-8 pb-12"
          onSubmit={editLink}
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
              defaultValue={previousData.name}
              onChange={(e) => setNewLinkName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="link"
              className="font-semibold md:text-xl text-cream"
            >
              Link
            </label>
            <input
              type="url"
              className="border-2 block px-2 py-1 rounded-lg w-full mt-2"
              defaultValue={previousData.link}
              onChange={(e) => setNewLink(e.target.value)}
            />
          </div>
          <button className="bg-cream border-2 rounded-lg px-4 py-1 mt-8 float-end">
            {isSubmitting ? <Loading /> : "Done"}
          </button>
        </Form>
      </div>
    </>
  );
};

export default Edit;

export const loader = async ({ params }) => {
  //   getting id form url
  const id = params.id;

  const token = localStorage.getItem("token");

  const response = await fetch(
    `https://taiju-2025-default-rtdb.firebaseio.com/${token}/${id}.json`
  );

  const result = await response.json();

  return result;
};
