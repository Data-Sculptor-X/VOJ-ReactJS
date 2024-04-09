import React from "react";
import { userLogin } from "store/actions/General/authActions";
import { useDispatch } from "react-redux";
function Login(props) {
  const dispatch =useDispatch()
  const [state, setState] = React.useState({
    username: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const { username, password } = state;
    dispatch(userLogin({
      username:username,
      password:password
    }))
    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-containers sign-up-containers ">
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
        <h1>Login</h1>

        <input
          type="username"
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
        <div className="d-flex justify-content-between w-100">
          <a className="font-weight-bold text-dark  d-flex align-items-center">
            Forgot Password ?
          </a>
          <button  className="loginButton">Sign In</button>
        </div>
      </form>
      <div className=" text-muted d-flex justify-content-center my-3">
        Copyright © {new Date().getFullYear()} iComply Lifescience Solutions
      </div>
    </div>
  );
}

export default Login;
