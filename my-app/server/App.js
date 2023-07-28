import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import { createPost } from "./controllers/post.js";
import { randomUUID } from "crypto";

import { fileURLToPath } from "url";
import multer from "multer";
import path from "path";
import { verifytoken } from "./middleware/auth.js";
import http from "http";
import { Server } from "socket.io";
import { log } from "console";
const __filename = fileURLToPath(import.meta.url);
const __dirnamee = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.use(express.static(path.join(__dirnamee,"build")))
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirnamee, 'build', 'index.html'));
// });
app.use("/assets/", express.static(path.join(__dirnamee, "public/assets/")));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/Signup", upload.single("pictureFile"), register);
app.post("/post", upload.single("pictureFile"), verifytoken, createPost);

//Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/post", postRoutes);

//Mongoose Connection
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
