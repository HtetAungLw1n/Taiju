import React from "react";
import AuthForm from "../components/AuthForm";
import { redirect } from "react-router-dom";

const Login = () => {
  return (
    <>
      <AuthForm
        form={"isLogin"}
        header={"Login to your account ."}
        button={"Login"}
        method={"POST"}
      />
    </>
  );
};

export default Login;

export const action = async ({ request }) => {
  const reqData = await request.formData();

  const name = reqData.get("name");
  const password = reqData.get("password");

  const response = await fetch(
    `https://taiju-2025-default-rtdb.firebaseio.com/${name}.json`
  );

  const result = await response.json();

  if (result) {
    const userInfo = Object.values(result)[0];

    if (userInfo?.password && password === userInfo.password) {
      return redirect("/");
    }
  }

  return null;
};
