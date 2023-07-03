import jwt from "jsonwebtoken";

export const verifytoken = async (req, res, next) => {
  try {
    var token = req.header("Authorization");
    if (!token) res.send({ msg: "Access Denied" });

    if (token.startsWith("Bearer "))
      token = token.slice(7, token.length).trimLeft();

    const verifiedtoken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifiedtoken;
    next();
  } catch (error) {
    throw error;
  }
};
