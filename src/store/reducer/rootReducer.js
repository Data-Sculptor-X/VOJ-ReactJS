// rootReducer.js
import { combineReducers } from "redux";
import auth from "./General/auth";

const rootReducer = combineReducers({
  auth: auth,
});

export default rootReducer;
