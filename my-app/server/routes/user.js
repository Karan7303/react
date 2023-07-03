import express from "express";
import { userSbProfile,userPosts,userSidebar,getUser } from "../controllers/user.js";
import { verifytoken } from "../middleware/auth.js";

const router = express.Router();
// router.post("/sideBarprofile",verifytoken,userSbProfile)
 router.post("/userPosts",verifytoken,userPosts)
// router.post("userSidebar",verifytoken,userSidebar)
 router.get("/id",verifytoken,getUser);
export default router;
