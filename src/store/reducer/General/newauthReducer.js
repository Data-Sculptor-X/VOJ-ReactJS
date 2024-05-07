const initialState = {
    message: null,
    error: null,
  };
  
  const newauthReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FORGOT_PASSWORD_SUCCESS':
        return {
          ...state,
          message: action.payload,
          error: null,
        };
      case 'FORGOT_PASSWORD_ERROR':
        return {
          ...state,
          message: null,
          error: action.error,
        };
      case 'VERIFY_FORGOT_PASSWORD_SUCCESS':
        return {
          ...state,
          message: action.payload,
          error: null,
        };
      case 'VERIFY_FORGOT_PASSWORD_ERROR':
        return {
          ...state,
          message: null,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default newauthReducer;
  