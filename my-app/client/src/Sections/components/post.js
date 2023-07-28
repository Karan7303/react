import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { Avatar, Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { setFriends } from "../../state/slice";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import CommentForm from "./commentForm";
import CommentSection from "./commentSection";

function Post(posts) {
  const token = useSelector((state) => state.token);
  const loggedInUser = useSelector((state) => state.user);
  const [userPost, setuserPost] = useState(posts.post);

  const [commentSectionshow, setcommentSectionshow] = useState(false);
  const dispatch = useDispatch();
  const updateLike = (p_id) => {
    axios
      .patch(
        process.env.REACT_APP_URL + "/post/id",
        {
          params: { postID: p_id },
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (response) {
        const _post = response.data;
        setuserPost(_post);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const addOrremove = (friendId) => {
    axios
      .patch(
        process.env.REACT_APP_URL + "/user/addOrRemove",
        {
          params: { friendId: friendId },
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (response) {
        const _user = response.data.friends;
        dispatch(setFriends({ friends: _user }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{
        bgcolor: "aliceblue",
        boxShadow:
          "2px 2px 5px aliceblue,2px 2px 17px black,2px 2px 25px aliceblue",
        p: 1,
        m: 2,
        mr: 3,
      }}
      className="homePagepost1"
    >
      <Stack direction={"row"} spacing={1}>
        <Avatar
          alt="Remy Sharp"
          src={
            process.env.REACT_APP_URL + "/assets/" + userPost.userPicturePath
          }
          xm="5"
        />
        <Box sx={{ bgcolor: "" }} component={"span"}>
          <Typography variant="h5">
            {userPost.firstName} {userPost.lastName}
          </Typography>
        </Box>
        {userPost.userId !== loggedInUser._id ? (
          <Button
            onClick={() => {
              addOrremove(userPost.userId);
            }}
          >
            <PersonAddIcon sx={{ ml: 42, pl: 20 }} />
          </Button>
        ) : null}
      </Stack>
      {userPost.picturePath !== null && (
        <Box
          component="img"
          sx={{ width: "500px", height: "500px", ml: 6 }}
          src={process.env.REACT_APP_URL + "/assets/" + userPost.picturePath}
        ></Box>
      )}
      <Box id="userContent" sx={{ bgcolor: "aliceblue", ml: 6, mt: 2 }}>
        {userPost.userContent}
      </Box>
      <Stack direction={"row"} sx={{ ml: 6, mt: 1 }} spacing={2}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            updateLike(userPost._id);
          }}
        >
          <Typography variant="h7">
            {Object.keys(userPost.likes).length}{" "}
          </Typography>
          {userPost.likes[userPost.userId] ? (
            <ThumbDownIcon />
          ) : (
            <ThumbUpAltIcon color="" />
          )}
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            setcommentSectionshow(commentSectionshow ? false : true);
          }}
        >
          {Object.keys(userPost.comments).length}
          <CommentIcon />
        </Button>
      </Stack>

      {commentSectionshow && <CommentSection props={userPost} />}
      <CommentForm _id={userPost._id} setuserPost={setuserPost} />
    </Box>
  );
}
export default Post;
