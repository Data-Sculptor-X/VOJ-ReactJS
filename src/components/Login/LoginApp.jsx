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
            <div className="overlay-panel overlay-right">
              <h1>IShala</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign Up
              </button>
            </div>
            <div className="overlay-panel overlay-left">
              <h1>iShala</h1>
              <img src={ims} height="100%" width="100%" />
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
