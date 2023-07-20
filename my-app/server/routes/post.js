import express from "express";
//import { userSbProfile,userPosts,userSidebar,getUser } from "../controllers/user.js";
import { getPost, likePost,commentPost } from "../controllers/post.js";
import { verifytoken } from "../middleware/auth.js";


const router = express.Router();
// router.post("/sideBarprofile",verifytoken,userSbProfile)
 //router.post("/userPosts",verifytoken,userPosts)
// router.post("userSidebar",verifytoken,userSidebar)
 router.get("/",verifytoken,getPost);
 router.patch("/id",verifytoken,likePost);
 router.patch("/comment/:id",verifytoken,commentPost)


export default router;
