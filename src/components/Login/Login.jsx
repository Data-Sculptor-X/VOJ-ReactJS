import React, { useState } from "react";
import { userLogin, UserGoogleLogin } from "store/actions/General/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import logo from "assets/logo.png";
import { Hourglass } from "react-loader-spinner";

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
    loading: false // State to manage loading
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
        loading: false // Set loading to false when login is completed
      });
    } catch (error) {
      setState({ ...state, loading: false }); // Set loading to false if there is an error
      console.error("Error occurred during login:", error);
    }
  };

  return (
    <div className="form-containers sign-up-containers ">
      <div>
        <img
          src={logo}
          height={150}
          className="mt-3"
          alt="Logo"
        />
        <h1>Voice of Justice</h1>
        <h4>Your Pocket Lawyer</h4>
      </div>
      <form onSubmit={handleOnLoginSubmit} className="loginform my-4">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={state.username}
          onChange={handleChange}
          className="logininput"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="logininput"
        />
        <div className="d-flex justify-content-between w-100 my-2">
          <a href="#" className="font-weight-bold text-dark d-flex align-items-center">
            Forgot Password ?
          </a>
          {state.loading ? (
            <Hourglass visible={true} color="red" height={30} width={30} /> // Display loading spinner
          ) : (
            <button type="submit" className="loginButton">Sign In</button>
          )}
        </div>
        <div className="d-flex justify-content-center my-2">
          <p className="font-weight-bold text-dark">or</p>
        </div>
        <div className="d-flex justify-content-center my-2">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              dispatch(UserGoogleLogin(credentialResponse.credential, navigate))
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            width="100%"
          />
        </div>
      </form>
      <div className="text-muted d-flex justify-content-center my-2">
        Copyright © {new Date().getFullYear()} Voice of Justice
      </div>
    </div>
  );
}

export default Login;
