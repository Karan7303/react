import express from "express";
import { addRemUserFriends,getUserFriends,getUser,getOtherUser } from "../controllers/user.js";
import { verifytoken } from "../middleware/auth.js";


const router = express.Router();
// router.post("/sideBarprofile",verifytoken,userSbProfile)
 router.get("/:id",verifytoken,getOtherUser)
router.patch("/addOrRemove",verifytoken,addRemUserFriends)
router.get("/id",verifytoken,getUser);
router.get("/friends",verifytoken,getUserFriends)
export default router;
