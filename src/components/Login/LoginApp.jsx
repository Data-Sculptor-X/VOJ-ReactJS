import React, { useState } from "react";
import "components/Login/style.css";
import Login from "components/Login/Login";
import SignUpForm from "components/Login/SignUpForm";
import robot from "assets/robot.png";

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
            <div className="overlay-panel overlay-right"> {/* Signup */}
              <h1 className="w-100 my-2">Welcome to Voice Of Justice!</h1>
              <img src={robot} height="300" />
              <button
                id="signUp"
                className="signup-right" // Added class "signup-btn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-left">  {/* Login Page */}
              <h1 className="w-100 my-2">Welcome to Voice Of Justice!</h1>
              <img src={robot} height="300" />
              
              <button
                id="signUp"
                className="signin-right" // Added class "signin-btn"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
