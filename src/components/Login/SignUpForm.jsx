import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "store/actions/General/authActions";

function SignUpForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
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
  
    const { name, email, password } = state;

    
    dispatch(userRegister({ name, email, password }));
  
    
    setState({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-containers sign-in-containers ">
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.KKdBKvtS7xwDHAdBAVOwkQAAAA?rs=1&pid=ImgDetMain"
          height={100}
          className="mt-3"
        />
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
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="logininput"
          placeholder="Enter your Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          className="logininput"
          placeholder="Enter your Password"
        />
        <div className="d-flex justify-content-end w-100">
          <button type="submit" className="loginButton">Sign Up</button> {/* Added type="submit" */}
        </div>
      </form>
      <div className=" text-muted d-flex justify-content-center my-3">
        Copyright © {new Date().getFullYear()} Voice of Justice
      </div>
    </div>
  );
}

export default SignUpForm;
