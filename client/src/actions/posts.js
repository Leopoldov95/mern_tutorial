import * as api from "../api";

// Action creators
// redux thunk, redux async
// instead of using return, have to use dispatch
export const getPosts = () => async (dispatch) => {
  try {
    // const action = { type: "FETCH_ALL", payload: [] };
    // destructring {data} can prevent us from having to use response.data
    const { data } = await api.fetchPosts();

    //  return action
    // have to use dispatch(), payload is the file to use/return
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
