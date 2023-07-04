import User from "../models/User.js"
import Post from "../models/Post.js"
export const createPost = async (req, res) => {
    try {
      const { userContent, picturePath } = req.body;
      const userId=req.user.id;
      const user = await User.findById(userId);
      const newPost = new Post({
        userId,
        firstName: user.firstName,
        lastName: user.lastName,
        userContent,
        userPicturePath: user.picture,
        picturePath,
        likes: {},
        comments: [],
      });
      await newPost.save();
  
      const post = await Post.find();
      res.status(201).json(post)
    } catch (err) {
      res.status(409).json({ message: err.message });
    }
  };
  export const getPost = async (req, res) => {
    //const post = await Post.findOne({ _id: req.user.id });
      const post = await Post.find();
        res.json({post:post})    
  }
