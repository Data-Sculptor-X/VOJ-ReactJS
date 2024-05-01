import { donHttps } from "config";

export const userLogin = (formBody, navigate) => async (dispatch) => {
  donHttps
    .post("/accounts/login/", formBody)
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
  donHttps
    .post("/accounts/register/", formBody)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const UserGoogleLogin = (token, navigate) => async (dispatch) => {
  console.log(token);
  donHttps
    .post("/accounts/glogin/", { token: token })
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
  console.log(ProfileData);
  donHttps
    .post("/accounts/userProfile/", { ProfileData: ProfileData })
    .then(({ data }) => {
      console.log(data);
      localStorage.setItem("Profile_Data", data.ProfileData);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchAllSections = () => (dispatch) => {
  donHttps
    .post("/core/getSection/")
    .then(({ data }) => {
      dispatch({ type: "SET_SECTION_DATA", data: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchChats = (formData) => (dispatch) => {
  donHttps
    .post("/core/getChat/", { SectionID: formData })
    .then(({ data }) => {
      dispatch({ type: "SET_CHAT_DATA", data: data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const generatePrompt = async (prompt) => {
  const response = await donHttps.post("/core/generate/", prompt);
  const data = response.data;
  console.log(data.generated_text);
  return data.generated_text;
};
export const LawyersList = async (filters) => {
  const lawyers_response = await donHttps.post("/core/getLawyer/", filters);
  const data = lawyers_response.data;
  console.log(data);
  return data;
};
