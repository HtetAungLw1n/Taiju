import React from "react";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <>
      <AuthForm
        form={"isLogin"}
        header={"Login to your account ."}
        button={"Login"}
      />
    </>
  );
};

export default Login;
