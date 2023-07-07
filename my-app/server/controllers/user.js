import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Post from "../models/Post.js";
import User from "../models/User.js";



  export const getUser = async (req, res) => {
    const userSelect = await User.findOne({ _id: req.user.id });
    return res.send({user:userSelect})    

  }
  export const getUserFriends = async(req,res)=>{
    const user = await User.find({_id:req.user.id})
    res.send(user)
  }
  export const addRemUserFriends = async (req, res) => {
  const friendId = req.body.params.friendId
  const user = await User.findById(req.user.id);
  const isFriend = user.friends.includes(friendId);

  if (isFriend !== true) user.friends.push(friendId);
  else user.friends.pull(friendId);

  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    { friends: user.friends },
    { new: true }
  );
  res.status(200).json(updatedUser);
  }
  export const getOtherUser = async (req, res) => {
    const userSelect = await User.findOne({ _id: req.params.id });
    return res.send({userSelect})
  }