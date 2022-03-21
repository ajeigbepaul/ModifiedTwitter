import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { signInWithGoogle } from "../firebase";

function Login() {
  const signIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="login">
      <div className="login__image">
        <img src="twitter2.jpg" alt="logo" />
        <h2>twitter.inc</h2>
      </div>
      <Button className="login__btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
