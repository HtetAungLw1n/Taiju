import React from "react";
import AuthForm from "../components/AuthForm";

const Signin = () => {
  return (
    <>
      <AuthForm
        form={"isSignIn"}
        header={"Create your own tree !"}
        button={"Sign In"}
      />
    </>
  );
};

export default Signin;
