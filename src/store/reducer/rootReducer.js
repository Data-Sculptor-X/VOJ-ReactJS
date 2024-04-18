// rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./General/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
