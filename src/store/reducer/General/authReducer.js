// reducers.js
const initialState = {
  user_detail: [],
  isAuthenticated: null,
  section_data: [],
  chat_data: [],
  section_id: "new",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DETAIL":
      return { ...state, user_detail: action.data };
    case "SET_SECTION_ID":
      return { ...state, section_id: action.data };
    case "IS_Authenticated":
      return { ...state, isAuthenticated: action.data };
    case "SET_SECTION_DATA":
      return { ...state, section_data: action.data };

    case "SET_CHAT_DATA":
      return { ...state, chat_data: action.data };
    case "SET_PROFILE_DATA":
      return {
        ...state,
        profileData: action.data,
      };
    default:
      return state;
  }
};

export default authReducer;
