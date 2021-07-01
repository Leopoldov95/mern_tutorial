// all handlers for our routes
// A single file can have multiple export(s)
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
export const getPosts = async (req, res) => {
  try {
    // retieve all posts we have in the data base
    const postMessages = await PostMessage.find();
    //console.log(postMessages);
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

export const updatePost = async (req, res) => {
  // when destructuring, we can rename our properties such as { id:_id }
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that ID");

  // update post if id is valid
  //{...post, _id}
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  // checks if id is valid
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that ID");

  await PostMessage.findByIdAndRemove(id);

  console.log('DELETE REACHED')

  res.json({ message: "Post Deleted Successfully" });
};

export const likePost = async(req,res) =>{
  const {id} =  req.params;
  // chacking of id is valid
  if (!mongoose.Types.ObjectId.isValid(id))return res.status(404).send("No post with that ID");

  const post = await postMessage.findById(id);
  const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, {new:true})

  res.json(updatedPost)
}
