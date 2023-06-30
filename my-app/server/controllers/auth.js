import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { firstname, lastname, email, password, picture, date, friends } =
      req.body;
    const salt = await bcrypt.genSalt();
    const PasswordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: PasswordHash,
      picture,
      date,
      friends,
    });
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.send(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.send({ msg: "User does not exist" });
    const matchPass = bcrypt.compare(password, user.password);
    if (!matchPass) return res.send({ msg: "Wrong Password!!!!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.send(200).json(token, user);
  } catch (error) {
    res.send(error);
  }
};
