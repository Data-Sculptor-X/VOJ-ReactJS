<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer'; // import your root reducer

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
=======
// store.js
import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer);
>>>>>>> origin/main

export default store;
