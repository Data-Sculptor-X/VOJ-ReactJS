// reducers.js
const initialState = {
  user_detail: [],
  isAuthenticated: null,
  section_data:[],
  chat_data:[]
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DETAIL":
      return { ...state, user_detail: state.data };
    case "IS_Authenticated":
      return { ...state, isAuthenticated: state.data };
      case "SET_SECTION_DATA":
      return { ...state, section_data: action.data };

      case "SET_CHAT_DATA":
        console.log(action.data)
        return { ...state, chat_data: action.data };
    default:
      return state;
  }
};

export default authReducer;
