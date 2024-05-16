import { Interceptor } from "config";

export const userLogin = (formBody, navigate) => async (dispatch) => {
  Interceptor.post("/accounts/login/", formBody)
    .then(({ data }) => {
      console.log(data);
      sessionStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      navigate("/voj");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userRegister = (formBody) => (dispatch) => {
  Interceptor.post("/accounts/register/", formBody)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const UserGoogleLogin = (token, navigate) => async (dispatch) => {
  console.log(token);
  Interceptor.post("/accounts/glogin/", { token: token })
    .then(({ data }) => {
      console.log(data);
      sessionStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      navigate("/voj");
    })
    .catch((err) => {
      console.log(err);
    });
};
export const UserProfile = (ProfileData) => async (dispatch) => {
  console.log("ProfileData:", ProfileData); // Check if ProfileData is received properly
  Interceptor.get("/accounts/userProfile/", { ProfileData: ProfileData })
    .then(({ data }) => {
      console.log("Response from API:", data); // Log response from API
      dispatch({ type: "SET_PROFILE_DATA", data });
      localStorage.setItem("Profile_Data", JSON.stringify(data)); // Convert data to string before storing
    })
    .catch((err) => {
      console.log(err);
    });
};

export const ForgotPassword = (email) => {
  return async (dispatch) => {
    let response;
    try {
      response = await Interceptor.post("/accounts/ForgotPassword/", { email });
      const data = response.data;
      console.log(data);
      dispatch({ type: "FORGOT_PASSWORD_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FORGOT_PASSWORD_ERROR", error });
    }
    return response;
  };
};

export const VerifyForgotPassword = ({ otp, password, sso }) => {
  return async (dispatch) => {
    try {
      const response = await Interceptor.post(
        "/accounts/VerifyForgotPassword/",
        {
          otp,
          password,
          sso,
        }
      );
      const data = response.data;
      console.log(data);
      dispatch({ type: "VERIFY_FORGOT_PASSWORD_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "VERIFY_FORGOT_PASSWORD_ERROR", error });
    }
  };
};

export const VerifyEmail = (sso) => {
  return async (dispatch) => {
    try {
      const response = await Interceptor.post("/accounts/VerifyEmail/", sso);
      const data = response.data;
      console.log(data);
      if (response.status === 201) {
        dispatch({ type: "VERIFY_FORGOT_PASSWORD_SUCCESS", payload: data });
        return data;
      } else {
        throw new Error("Email verification failed");
      }
    } catch (error) {
      dispatch({ type: "VERIFY_FORGOT_PASSWORD_ERROR", error: error.message });
      throw error;
    }
  };
};

export const fetchAllSections = () => (dispatch) => {
  Interceptor.post("/core/getSection/")
    .then(({ data }) => {
      dispatch({ type: "SET_SECTION_DATA", data: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchChats = (formData) => (dispatch) => {
  Interceptor.post("/core/getChat/", { SectionID: formData })
    .then(({ data }) => {
      dispatch({ type: "SET_CHAT_DATA", data: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const generatePrompt = (prompt) => (dispatch) => {
  Interceptor.post("/core/generate2/", prompt)
    .then(({ data }) => {
      dispatch(fetchChats(data.SectionID));
      dispatch({ type: "SET_SECTION_ID", data: data.SectionID });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const LawyersList = async (filters) => {
  const lawyers_response = await Interceptor.post("/core/getLawyer/", filters);
  const data = lawyers_response.data;
  console.log(data);
  return data;
};
export const IndianLawList = async (pageno) => {
  const laws_response = await Interceptor.post("/core/getLaws/", pageno);
  const data = laws_response.data;
  console.log(data);
  return data;
};
export const Loader = async () => {
  const response = await Interceptor.get("/accounts/serverApi/");
  const data = response.data;
  console.log(data);
  return data;
};

export const getQuery = async (data) => {
  const response = await Interceptor.post("/core/getQueryLaw/", data);
  const Querydata = response.data;
  console.log(Querydata);
  return Querydata;
};
