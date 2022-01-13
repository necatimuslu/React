import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import postReducer from "./reducers/postReducer";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
  posts: postReducer,
  user: userReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
