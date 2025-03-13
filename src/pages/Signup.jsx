import React from "react";
import AuthForm from "../components/AuthForm";
import { redirect } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <AuthForm
        form={"issignup"}
        header={"Create your own tree !"}
        button={"Sign Up"}
        method={"POST"}
      />
    </>
  );
};

export default Signup;

export const action = async ({ request }) => {
  const reqData = await request.formData();
  const name = reqData.get("name");

  const userData = {
    email: reqData.get("email"),
    password: reqData.get("password"),
  };

  const response = await fetch(
    `https://taiju-2025-default-rtdb.firebaseio.com/${name}.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  if (!response.ok) {
    // error page
  }

  return redirect("/login");
};
