import React from "react";
<<<<<<< HEAD
import { userLogin, UserGoogleLogin } from "store/actions/General/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    username: "",
    password: "",
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
     dispatch(userLogin({ username, password },navigate));
        setState({
          username: "",
          password: "",
        });
  
  };
  
  
//   const handleGoogleLoginSubmit = async () => {
//   try {
//     const googleResponse = await UserGoogleLogin(); // Use the provided GoogleLogin component
//     const googleToken = googleResponse.credential; // Extract the access token (if applicable)

//     const dispatchResponse = await dispatch(UserGoogleLogin(googleToken)); // Dispatch the action
//     if (dispatchResponse && dispatchResponse.token) {
//       // Handle successful server-side authentication (optional)
//       navigate('/voj'); // Or perform other actions based on success
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };


=======
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
>>>>>>> origin/main

  return (
    <div className="form-containers sign-up-containers ">
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.KKdBKvtS7xwDHAdBAVOwkQAAAA?rs=1&pid=ImgDetMain"
          height={100}
          className="mt-3"
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/main
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
<<<<<<< HEAD
        <div className="d-flex justify-content-between w-100 my-2">
          <a href="#" className="font-weight-bold text-dark d-flex align-items-center">
            Forgot Password ?
          </a>
          <button type="submit" className="loginButton">Sign In</button>
        </div>
        <div className="d-flex justify-content-center my-2">
          <p className="font-weight-bold text-dark">or</p>
        </div>
        <div className="d-flex justify-content-center my-2">
            {/* <GoogleLogin
              onSuccess={handleGoogleLoginSubmit}
              onError={() => {
                console.log('Login Failed');
              }}
            /> */}
            <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          console.log(credentialResponse);
                          dispatch(UserGoogleLogin(credentialResponse.credential,navigate))
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
=======
        <div className="d-flex justify-content-between w-100">
          <a className="font-weight-bold text-dark  d-flex align-items-center">
            Forgot Password ?
          </a>
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

export default Login;
