import React from "react";
function Login() {
  const [state, setState] = React.useState({
    email: "",
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

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

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
        <h1>SSri Muthukumarn Institute of Technolgy</h1>
        <h4>Mangadu Rd, Chikkarayapuram, Chennai, Tamil Nadu 600069 ·</h4>
      </div>
      <form onSubmit={handleOnSubmit} className="loginform  my-4">
        <h1>Sign in</h1>

        <input
          type="email"
          placeholder="Username"
          name="email"
          value={state.email}
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
          <button className="loginButton">Sign In</button>
        </div>
      </form>
      <div className=" text-muted d-flex justify-content-center my-3">
        Copyright © {new Date().getFullYear()} iComply Lifescience Solutions
      </div>
    </div>
  );
}

export default Login;
