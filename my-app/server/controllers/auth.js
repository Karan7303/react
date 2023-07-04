import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, picture, date, friends } =
      req.body;
    const salt = await bcrypt.genSalt();
    const PasswordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
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

    if (!user) return res.send({ msg: "User does not exist" ,match:false});

    bcrypt.compare(password, user.password).then((match, err) => {
      if (err) return res.send(err);
      if (match) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        return res
          .send({ token: token, user: user, match:match,msg: "Correct passowrd!!!" });
      } else return res.send({ msg: "Wrong Password!!!!",match:match });
    });
  } catch (error) {
    res.send(error);
  }
};
