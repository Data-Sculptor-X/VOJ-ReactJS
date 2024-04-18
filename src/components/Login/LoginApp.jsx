import React, { useState } from "react";
import "components/Login/style.css";
import Login from "components/Login/Login";
import SignUpForm from "components/Login/SignUpForm";
import ims from "assets/clss.svg";

export default function LoginApp() {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containersClass =
    "containers " + (type === "signUp" ? "" : "right-panel-active");
  return (
    <div className="App">
      <div className={containersClass} id="containers">
        <SignUpForm />
        <Login />
        <div className="overlay-containers">
          <div className="overlay">
<<<<<<< HEAD
            <div className="overlay-panel overlay-right"> {/* Signup */}
              <h1 className="w-100 my-2">Welcome to iShala!</h1>
              <img src={ims} height="300" />
              <button
                id="signUp"
                className="signup-right" // Added class "signup-btn"
=======
            <div className="overlay-panel overlay-right">
              <h1 className="w-100 my-2">Welcome to iShala!</h1>
              <img src={ims} height="300" />
              <span className="w-100 text-justify my-4">
                iShala streamlines your work by consolidating all your school
                management tasks into a single, convenient platform.
                Effortlessly manage attendance, grades, schedules, and more!
                iShala is your one-stop shop for school success. Educators and
                administrators can stay organized, while keeping parents
                informed and connected to the school community. Simplify School
                Management with iShala. Sign in to access everything in one
                place
              </span>
              <button
                id="signUp"
                className="logininput"
>>>>>>> origin/main
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
<<<<<<< HEAD
            <div className="overlay-panel overlay-left">  {/* Login Page */}
              <h1 className="w-100 my-2">Welcome to iShala!</h1>
              <img src={ims} height="300" />
              
              <button
                id="signUp"
                className="signin-right" // Added class "signin-btn"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
=======
            <div className="overlay-panel overlay-left">
              <h1 className="w-100 my-2">Welcome to iShala!</h1>
              <img src={ims} height="300" />
              <span className="w-100 text-justify my-4">
                iShala streamlines your work by consolidating all your school
                management tasks into a single, convenient platform.
                Effortlessly manage attendance, grades, schedules, and more!
                iShala is your one-stop shop for school success. Educators and
                administrators can stay organized, while keeping parents
                informed and connected to the school community. Simplify School
                Management with iShala. Sign in to access everything in one
                place
              </span>
              <button
                id="signUp"
                className="logininput"
                onClick={() => handleOnClick("signUp")}
              >
                Circular / Notice
>>>>>>> origin/main
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
