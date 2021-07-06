import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" }); // can set a base url here

// this function will run on every request, it's helping the middleware function
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    ////// due to how headers are handled, VAR NAMES AFTER req MUST BE IN LOWERCASE ///////
    // name of a property must match!!! Authorization !== authorization
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// so by using this url, we can use the backend logic
//const url = `https://memories-mern-lesson.herokuapp.com/posts`;
//const url = "/posts";

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// auth routes
export const signin = (formData) => API.post("/users/signin", formData);
export const signup = (formData) => API.post("/users/signup", formData);
