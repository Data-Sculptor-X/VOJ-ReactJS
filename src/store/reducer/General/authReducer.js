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
      return { ...state, user_detail: state.data };
    case "SET_SECTION_ID":
      return { ...state, section_id: state.data };
    case "IS_Authenticated":
      return { ...state, isAuthenticated: state.data };
    case "SET_SECTION_DATA":
      return { ...state, section_data: action.data };

    case "SET_CHAT_DATA":
      console.log(action.data);
      return { ...state, chat_data: action.data };
    case "SET_PROFILE_DATA":
      console.log("New profile data:", action.payload); // Log the new profile data
      return {
        ...state,
        profileData: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
