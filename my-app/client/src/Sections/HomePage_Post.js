import { Box, Avatar, Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Typography from "@mui/material/Typography";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "../App.css";
import { useEffect, useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import { useSelector, useDispatch } from "react-redux";
import { setPosts, setPost, setFriends } from "../state/slice";
import CommentForm from "./components/commentForm";
import CommentSection from "./components/commentSection";

function HomePage_Post({ userID }) {
  const postData = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);
  const [commentSectionshow, setcommentSectionshow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL+"/post", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        const data = response.data.post;
        dispatch(setPosts({ posts: data }));
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);

  const updateLike = (p_id) => {
    axios
      .patch(
        process.env.REACT_APP_URL+"/post/id",
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
        dispatch(setPost({ post: _post }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const addOrremove = (friendId) => {
    axios
      .patch(
        process.env.REACT_APP_URL+"/user/addOrRemove",
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
    postData !== null && (
      <Box component="div" id="container">
        {postData.map(function (item, i) {
          return (
            <Box
              key={i}
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
                    process.env.REACT_APP_URL+"/assets/" +
                    item.userPicturePath
                  }
                  xm="5"
                />
                <Box sx={{ bgcolor: "" }} component={"span"}>
                  <Typography variant="h5">
                    {item.firstName} {item.lastName}
                  </Typography>
                </Box>
                {item.userId !== userID ? (
                  <Button
                    onClick={() => {
                      addOrremove(item.userId);
                    }}
                  >
                    <PersonAddIcon sx={{ ml: 42, pl: 20 }} />
                  </Button>
                ) : null}
              </Stack>
              {item.picturePath !== null && (
                <Box
                  component="img"
                  sx={{ width: "500px", height: "500px", ml: 6 }}
                  src={
                    process.env.REACT_APP_URL+"/assets/" +
                    item.picturePath
                  }
                ></Box>
              )}
              <Box id="userContent" sx={{ bgcolor: "aliceblue", ml: 6, mt: 2 }}>
                {item.userContent}
              </Box>
              <Stack direction={"row"} sx={{ ml: 6, mt: 1 }} spacing={2}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    updateLike(item._id);
                  }}
                >
                  <Typography variant="h7">
                    {Object.keys(item.likes).length}{" "}
                  </Typography>
                  {item.likes[userID] ? (
                    <ThumbDownIcon />
                  ) : (
                    <ThumbUpAltIcon color="" />
                  )}
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    setcommentSectionshow((commentSectionshow)?false:true)
                    // if (commentSectionshow === true){
                        
                    //   setcommentSectionshow(false);}
                    // else setcommentSectionshow(true);
                  }}
                >
                  {Object.keys(item.comments).length}
                  <CommentIcon />
                </Button>
              </Stack>
            
              {commentSectionshow && <CommentSection props={item} />}
              <CommentForm props={item._id} />
            </Box>
          )
        })}
      </Box>
    )
  );
}

export default HomePage_Post;
