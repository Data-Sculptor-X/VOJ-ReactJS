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
      `You have signed up with name: ${name} email: ${email} and password: ${password}`
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
        <h1>Voice of Justice</h1>
        <h4>Your Pocket Lawyer</h4>
      </div>
      <form onSubmit={handleOnSubmit} className="loginform  my-4">
        <h1>Sign Up page</h1>
        <input
          type="name"
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
          <button className="loginButton">Sign Up</button>
        </div>
      </form>
      <div className=" text-muted d-flex justify-content-center my-3">
        Copyright © {new Date().getFullYear()} Voice of
      </div>
    </div>
  );
}

export default SignUpForm;
