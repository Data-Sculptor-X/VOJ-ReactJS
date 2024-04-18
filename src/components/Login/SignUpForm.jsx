<<<<<<< HEAD
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "store/actions/General/authActions";

function SignUpForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
=======
import React from "react";
function SignUpForm() {
  const [state, setState] = React.useState({
>>>>>>> origin/main
    name: "",
    email: "",
    password: "",
  });
<<<<<<< HEAD

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
=======
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
>>>>>>> origin/main
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
<<<<<<< HEAD
  
    const { name, email, password } = state;

    
    dispatch(userRegister({ name, email, password }));
  
    
    setState({
      name: "",
      email: "",
      password: "",
    });
=======

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
>>>>>>> origin/main
  };

  return (
    <div className="form-containers sign-in-containers ">
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.KKdBKvtS7xwDHAdBAVOwkQAAAA?rs=1&pid=ImgDetMain"
          height={100}
          className="mt-3"
        />
<<<<<<< HEAD
        <h1>Voice of Justice</h1>
        <h4>Your Pocket Lawyer</h4>
      </div>
      <form onSubmit={handleOnSubmit} className="loginform  my-4">
        <h1>Sign Up page</h1>
        <input
          type="text" // Changed type to "text"
          name="name"
          value={state.name}
          onChange={handleChange}
          className="logininput"
          placeholder="Enter your Fullname"
        />
=======
        <h1>SSri Muthukumarn Institute of Technolgy</h1>
        <h4>Mangadu Rd, Chikkarayapuram, Chennai, Tamil Nadu 600069 ·</h4>
      </div>
      <form onSubmit={handleOnSubmit} className="loginform  my-4">
        <h1>Forgot Password</h1>
>>>>>>> origin/main
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="logininput"
<<<<<<< HEAD
          placeholder="Enter your Email"
=======
          placeholder="Username"
>>>>>>> origin/main
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          className="logininput"
<<<<<<< HEAD
          placeholder="Enter your Password"
        />
        <div className="d-flex justify-content-end w-100">
          <button type="submit" className="loginButton">Sign Up</button> {/* Added type="submit" */}
        </div>
      </form>
      <div className=" text-muted d-flex justify-content-center my-3">
        Copyright © {new Date().getFullYear()} Voice of Justice
=======
          placeholder="Password"
        />
        <div className="d-flex justify-content-end w-100">
          <button className="loginButton">Sign In</button>
        </div>
      </form>
      <div className=" text-muted d-flex justify-content-center my-3">
        Copyright © {new Date().getFullYear()} iComply Lifescience Solutions
>>>>>>> origin/main
      </div>
    </div>
  );
}

export default SignUpForm;
