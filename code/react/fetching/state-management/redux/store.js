import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./index";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [ReduxThunk];
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
