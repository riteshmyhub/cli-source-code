import { combineReducers } from "redux";
import { userReducer } from "./user.reducers.js";

const rootReducer = combineReducers({
   userReducer: userReducer,
});

export default rootReducer;
