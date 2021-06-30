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

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    // using { data } destructures the res
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
