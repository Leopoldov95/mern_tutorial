// all posts related routes here
import express from "express";
import { getPosts, createPost, updatePost, deletePost } from "../controllers/posts.js";
const router = express.Router();

// remeber that the (req,res)=>{} callback can be stored seperatley on the controllers folder and let that file handle functionality
router.get("/", getPosts);
router.post("/", createPost);
//router.patch is to update an existing document
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)

export default router;
