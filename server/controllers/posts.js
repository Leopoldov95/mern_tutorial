// all handlers for our routes
// A single file can have multiple export(s)
import PostMessage from "../models/postMessage.js";
export const getPosts = async (req, res) => {
  try {
    // retieve all posts we have in the data base
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  // with POST requests, we have access to req.body
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save(); //save() is asynchronous\
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
