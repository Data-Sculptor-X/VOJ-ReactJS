import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "store/actions/General/authActions";
import logo from "assets/logo.png";

function SignUpForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    dob: "", // Added dob field in the state
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
  
    const { name, email, password, dob } = state; // Added dob in the destructuring

    // Added dob in the payload
    dispatch(userRegister({ name, email, password, dob }));
  
    setState({
      name: "",
      email: "",
      password: "",
      dob: "",
    });
  };

  return (
    <div className="form-containers sign-in-containers ">
      <div>
        <img
          src={logo}
          height={80}
          className="mt-3"
          alt="Logo"
        />
        <h4>Voice of Justice</h4>
        <p>Your Pocket Lawyer</p>
      </div>
      <form onSubmit={handleOnSubmit} className="loginform my-2">
        <h3>Sign Up</h3>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          className="logininput mb-1"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="logininput mb-1"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          className="logininput mb-1"
          placeholder="Password"
        />
        <input
          type="date"
          name="dob"
          value={state.dob}
          onChange={handleChange}
          className="logininput mb-1"
          placeholder="Date of Birth"
        />
        <button type="submit" className="loginButton mb-1">Sign Up</button>
      </form>
      <div className="text-muted text-center mt-2">
        © {new Date().getFullYear()} Voice of Justice
      </div>
    </div>
  );
}

export default SignUpForm;
