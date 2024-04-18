<<<<<<< HEAD
import { donHttps } from "config";

export const userLogin = (formBody, navigate) => async (dispatch) => {
  donHttps
    .post('/accounts/login/', formBody)
    .then(({ data }) => {
      console.log(data);
      sessionStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      navigate('/voj');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userRegister = (formBody) => (dispatch) => {
  donHttps
    .post('/accounts/register/', formBody)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const UserGoogleLogin = (token, navigate) => async (dispatch) => {
  console.log(token);
  donHttps.post('/accounts/glogin/', { token: token })
    .then(({ data }) => {
      console.log(data);
      sessionStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      navigate('/voj');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchAllChats = () => async () => {
    const response = await donHttps.get('/core/getSection/');
    const data = response.data;
    console.log(data.SectionID)
    return data.SectionID;
  };

export const fetchChat = () => async () => {
  try {
    const response = await donHttps.get('/core/getChat/');
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const generatePrompt = async (prompt) => {
    const response = await donHttps.post('/core/generate/', {prompt})       
    const data = response.data;
    console.log(data.generated_text)
    return data.generated_text;
};
=======
// reducers.js
const initialState = {
  count: 0,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default authReducer;
>>>>>>> origin/main
