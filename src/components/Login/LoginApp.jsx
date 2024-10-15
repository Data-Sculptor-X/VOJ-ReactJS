import React, { useState, useEffect } from "react";
import "components/Login/style.css";
import Login from "components/Login/Login";
import SignUpForm from "components/Login/SignUpForm";
import robot from "assets/robot.png";
import { Loader } from "store/actions/General/authActions";
import { Hourglass } from "react-loader-spinner";
import Typography from "@mui/material/Typography";

export default function LoginApp() {
  const [type, setType] = useState("signIn");
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await Loader();
        setResponse(data);
        setLoading(false);
      } catch (error) {
        console.error("Error occurred during login:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []); // Empty dependency array to run only once on mount

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const containersClass =
    "containers " + (type === "signUp" ? "" : "right-panel-active");

  return (
    <div className="App">
      {loading ? (
        // Render loader while waiting for response
        <div style={{ textAlign: "center", marginTop: "50px", marginBottom:'100px' }}>
          <Hourglass
            visible={true}
            height="80"
            width="80"
            marginBottom="24"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#FD0606", "#ED7272"]}
          />
          <Typography variant="body1" style={{color:'red',fontSize:'18px',marginTop:"12PX"}}>
            Please wait, our Lawyers are finishing up with their previous cases
          </Typography>
        </div>
      ) : (
        <div className={containersClass} id="containers">
          <SignUpForm />
          <Login />
          <div className="overlay-containers">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                {/* Signup */}
                <h1 className="w-100 my-2">Welcome to Voice Of Justice!</h1>
                <img src={robot} alt="robot" height="300" />
                <button
                  id="signUp"
                  className="signup-right"
                  onClick={() => handleOnClick("signIn")}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-left">
                {/* Login Page */}
                <h1 className="w-100 my-2">Welcome to Voice Of Justice!</h1>
                <img src={robot} alt="robot" height="300" />
                <button
                  id="signUp"
                  className="signin-right"
                  onClick={() => handleOnClick("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Render based on response */}
      {response && <div>{/* render based on the response */}</div>}
    </div>
  );
}
