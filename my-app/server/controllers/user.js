import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Post from "../models/Posts.js";
import User from "../models/User.js";


export const userPosts = async (req, res) => {
    try {
      const { userContent, pictureUpload,user } =
        req.body;
      
      const newPost = new Post({
        userContent,
        pictureUpload,
        user:req.user.id,
      });
      const savePost = await newPost.save();
      res.status(201).json(savePost);
    } catch (error) {
      res.send(error);
    }
  };
  export const getUser = async (req, res) => {
    const userSelect = await User.findOne({ _id: req.user.id });
    return res.send({user:userSelect})    

  }
  export const userSbProfile = async (req, res) => {}
  export const userSidebar = async (req, res) => {}