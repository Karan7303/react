import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    min: 2,
    max: 50,
  },
  lastName: {
    type: String,
    require: true,
    min: 2,
    max: 50,
  },
  userContent: {
    type: String,
    require: true,
    min: 2,
    max: 200,
  },
  picturePath: {
    type: String,
    default: null,
  },
  userId: {
    require: true,
    type: String,
  },
  userPicturePath: String,
  likes: {
    type: Map,
    of: Boolean,
  },
  comments: {
    type: Array,
    default: [],
  },
});
const Post = mongoose.model("Post", PostSchema);
export default Post;
