import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./shared/firebase";

function Login() {
  return (
    <div>
      <h1>LOGIN</h1>
      <h4>Where did you go!!!!</h4>
      <label>ID</label>
      <input />
      <label>PASSWORD</label>
      <input />
      <button>LOGIN</button>
    </div>
  );
}

export default Login;
