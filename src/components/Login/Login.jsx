import React, { useState } from "react";
import { userLogin, UserGoogleLogin } from "store/actions/General/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import logo from "assets/logo.png";
import { Hourglass } from "react-loader-spinner";
import { Link } from "react-router-dom";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
    loading: false, // State to manage loading
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnLoginSubmit = async (evt) => {
    evt.preventDefault();
    const { username, password } = state;
    setState({ ...state, loading: true }); // Set loading to true when login is initiated
    try {
      await dispatch(userLogin({ username, password }, navigate));
      setState({
        username: "",
        password: "",
        loading: false, // Set loading to false when login is completed
      });
    } catch (error) {
      setState({ ...state, loading: false }); // Set loading to false if there is an error
      console.error("Error occurred during login:", error);
    }
  };

  return (
    <div className="form-containers sign-up-containers ">
      <div>
        <img src={logo} height={100} className="mt-3" alt="Logo" />
        <h3>Voice of Justice</h3>
        <p>Your Pocket Lawyer</p>
      </div>
      <form onSubmit={handleOnLoginSubmit} className="loginform my-2">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={state.username}
          onChange={handleChange}
          className="logininput mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="logininput mb-2"
        />
        <Link
          to="/userforgotpassword"
          className="font-weight-bold text-dark d-block mb-2"
        >
          Forgot Password ?
        </Link>
        {state.loading ? (
          <div className="text-center">
            <Hourglass visible={true} color="red" height={30} width={30} />
            <p className="mt-2">Logging in...</p>
          </div>
        ) : (
          <button type="submit" className="loginButton mb-2">
            Sign In
          </button>
        )}
        <p className="font-weight-bold text-dark text-center mb-2">or</p>
        <div className="d-flex justify-content-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              dispatch(
                UserGoogleLogin(credentialResponse.credential, navigate)
              );
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            width="100%"
          />
        </div>
      </form>
      <div className="text-muted text-center mt-2">
        Copyright © {new Date().getFullYear()} Voice of Justice
      </div>
    </div>
  );
}

export default Login;
