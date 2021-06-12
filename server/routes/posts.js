// all posts related routes here
import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";
const router = express.Router();

// remeber that the (req,res)=>{} callback can be stored seperatley on the controllers folder and let that file handle functionality
router.get("/", getPosts);
router.post("/", createPost);

export default router;
