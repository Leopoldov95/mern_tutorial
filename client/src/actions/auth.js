import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in the user
    const { data } = await api.signin(formData);

    // the dispatch here appears to be setting some statet to the data we recieve
    // so the way redux-reducer works, this is setting some state that we can use across our entire application. This avoids us from having to pass states down from child to child to child
    dispatch({ type: AUTH, data });
    // console.log(data);
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up the user
    const { data } = await api.signup(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
