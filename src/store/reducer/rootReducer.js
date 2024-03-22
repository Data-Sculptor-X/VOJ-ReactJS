// rootReducer.js
import { combineReducers } from "redux";
import auth from "./General/authReducer";

const rootReducer = combineReducers({
  auth: auth,
});

export default rootReducer;
