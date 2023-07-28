import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
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
      email: {
        type: String,
        require: true,
        min: 2,
        max: 50,
      },
      password: {
        type: String,
        require: true,
        min: 5,
        max: 50,
      },
      picture: {
        type: String,
        default: " ",
      },
      dob: {
        type: Date,
        require: true,
      },
      Bio:{
        type:String,
        min:2,
        max:200
      },
      friends: {
        type: Array,
        default:[],
      },
    },
    { timestamps: true }
  );
  const User = mongoose.model("User",UserSchema)
  export default User;