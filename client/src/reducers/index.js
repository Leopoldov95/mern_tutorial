import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";

// name of reducer will be posts
export default combineReducers({ posts, auth });
