import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userContent: {
      type: String,
      require: true,
      min: 2,
      max: 200,
    },
    pictureUpload: {
      type: String,
      default: "no upload",
    },
    user: {
      require: true,
      type: String,
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", PostSchema);
export default Post;
