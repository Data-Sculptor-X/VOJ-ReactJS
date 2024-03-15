// reducers.js
const initialState = {
  user_detail: [],
  isAuthenticated: null,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DETAIL":
      return { ...state, user_detail: state.data };
    case "IS_Authenticated":
      return { ...state, isAuthenticated: state.data };
    default:
      return state;
  }
};

export default counterReducer;
