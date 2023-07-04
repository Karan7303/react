import express from "express";
//import { userSbProfile,userPosts,userSidebar,getUser } from "../controllers/user.js";
import { getPost } from "../controllers/post.js";
import { verifytoken } from "../middleware/auth.js";


const router = express.Router();
// router.post("/sideBarprofile",verifytoken,userSbProfile)
 //router.post("/userPosts",verifytoken,userPosts)
// router.post("userSidebar",verifytoken,userSidebar)
 router.get("/",verifytoken,getPost);

export default router;
