import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Post from "../models/Post.js";
import User from "../models/User.js";



  export const getUser = async (req, res) => {
    const userSelect = await User.findOne({ _id: req.user.id });
    return res.send({user:userSelect})    

  }
  export const userSbProfile = async (req, res) => {}
  export const userSidebar = async (req, res) => {}