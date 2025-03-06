import React from "react";
import AuthForm from "../components/AuthForm";

const Signin = () => {
  return (
    <>
      <AuthForm
        form={"isSignIn"}
        header={"Create your own tree !"}
        button={"Sign In"}
        method={"POST"}
      />
    </>
  );
};

export default Signin;

export const action = async ({ request }) => {
  const reqData = await request.formData();
  const name = reqData.get("name");
  console.log(email);

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
};
