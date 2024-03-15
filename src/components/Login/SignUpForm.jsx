import React from "react";
function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
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
  };

  return (
    <div className="form-containers sign-in-containers ">
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
        <h1>Forgot Password</h1>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="logininput"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          className="logininput"
          placeholder="Password"
        />
        <div className="d-flex justify-content-end w-100">
          <button className="loginButton">Sign In</button>
        </div>
      </form>
      <div className=" text-muted d-flex justify-content-center my-3">
        Copyright © {new Date().getFullYear()} iComply Lifescience Solutions
      </div>
    </div>
  );
}

export default SignUpForm;
