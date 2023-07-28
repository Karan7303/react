import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Post from "../models/Post.js";
import User from "../models/User.js";

export const getUser = async (req, res) => {
  const userSelect = await User.findOne({ _id: req.user.id });
  return res.send({ user: userSelect });
};
export const getUsers = async (req, res) => {
  var field = req.query.searchField;
  var value = req.query.FieldValue;
  var query = {};
  query[field] = value;

  const users = value === "" ? await User.find() : await User.find(query);
  res.status(200).json(users);
};
export const deleteUser = async (req, res) => {
   var id = req.body.data._id;

  await User.findOneAndDelete({_id:id});
  await Post.deleteMany({userId:id});

  //console.log(users);
  //res.status(200).json(users);
};
export const getUserFriends = async (req, res) => {
  const user = await User.find({ _id: req.user.id });
  res.send(user);
};
export const addRemUserFriends = async (req, res) => {
  const friendId = req.body.params.friendId;
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
};
export const getOtherUser = async (req, res) => {
  console.log("getOtherUser triggered");

  const userSelect = await User.findOne({ _id: req.params.id });
  return res.send({ userSelect });
};
