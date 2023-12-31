import User from "../models/User.js";
import Post from "../models/Post.js";
export const createPost = async (req, res) => {
  try {
    const { userContent, picturePath } = req.body;
    const userId = req.user.id;
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
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
export const getPost = async (req, res) => {
  //const post = await Post.findOne({ _id: req.user.id });
  const sort ={_id:-1}
  const query={}
  const post = await Post.find(query).sort(sort)
  res.json({ post: post });
};
export const getuserPost = async (req, res) => {
  //const post = await Post.findOne({ _id: req.user.id });
  console.log(req.query._id);
  const post = await Post.find({userId:req.query._id});
  res.json({ post: post});
};
export const likePost = async (req, res) => {
  const id = req.body.params.postID
  const post = await Post.findById(id);
  const like = post.likes.get(req.user.id);

  if (like !== true) post.likes.set(req.user.id, true);
  else post.likes.delete(req.user.id);

  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { likes: post.likes },
    { new: true }
  );
  res.status(200).json(updatedPost);
};
export const commentPost = async (req, res) => {
  // const postSelect = await Post.findOne({ _id: req.body.params.postID });
  // console.log(postSelect);
  // res.status(200).json(postSelect)

  const id = req.body.params.postID
  const post = await Post.findById(id);
  const text = req.body.params.commentText
  const userId = req.user.id
  const date1 = new Date().toLocaleTimeString('en-US');
  const date12 = new Date().toDateString('en-US')+" ";

  post.comments.push({content: text,userId:userId,date:date12+date1});
  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { comments: post.comments },
    { new: true }
  );
  res.status(200).json(updatedPost);
};
