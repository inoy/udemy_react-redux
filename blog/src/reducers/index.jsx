import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import usersReducer from "./userReducer";

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
});
