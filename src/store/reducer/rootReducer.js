// rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./General/authReducer";
import newauthReducer from "./General/newauthReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  newauth: newauthReducer,
});

export default rootReducer;
