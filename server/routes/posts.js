// all posts related routes here
import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
import auth from "../middleware/auth.js"
const router = express.Router();


// remeber that the (req,res)=>{} callback can be stored seperatley on the controllers folder and let that file handle functionality
// we add the auth middleware to the routes that require authentication to work
router.get("/", getPosts);
router.post("/", auth, createPost);
//router.patch is to update an existing document
// updating and deleting post managed by the frontend
router.patch('/:id', auth, updatePost)
router.delete('/:id',auth, deletePost)
// making sure user can only like post once is managed in the backend
router.patch('/:id/likePost', auth,likePost);

export default router;
