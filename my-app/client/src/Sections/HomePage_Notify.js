import { Box, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Avatar, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { alignProperty } from "@mui/material/styles/cssUtils";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentForm from "./components/commentForm";
import CommentSection from "./components/commentSection";
import axios from "axios";

const HomePageNotify = () => {
  const { state } = useLocation();
  const { userId } = state;
  const loggedInUser = useSelector((state) => state.user);
  const [userPosts, setuserPosts] = useState(null);
  const token = useSelector((state) => state.token);
  const [commentSectionshow, setcommentSectionshow] = useState(false);
  const [Data, setData] = useState(null);
  useEffect(() => {
    //axios.get('user/:'+sessionStorage.getItem('Authorization'))

    if (loggedInUser._id !== userId._id) {
      axios
        .get("https://backend-z03p.onrender.com/user/" + userId._id, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(function (response) {
          setData(response.data.user);
        })
        .catch(function (error) {
          console.log(error.response);
        });
    } else setData(loggedInUser);

    axios
      .get(
        "https://backend-z03p.onrender.com/post/id",

        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
        {
          params: { _id: userId._id },
        }
      )
      .then(function (response) {
        const data = response.data.post;
        console.log(response.data);
        setuserPosts({ posts: data });
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);
  return (
    Data !== null && (
      <>
        <Navbar />
        <Grid container spacing={2}>
          <Grid item xs={5} sx={{ m: 1 }}>
            <Box
              sx={{
                bgcolor: "#87bd517a",
                minwidth: 300,
                height: 300,
                marginLeft: 5,
                padding: 2,
              }}
            >
              <Box
                component={"span"}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {" "}
                <Avatar
                  alt="Remy Sharp"
                  id="profileP"
                  src={
                    "https://backend-z03p.onrender.com/assets/" + Data.picture
                  }
                  sx={{ margin: 2, height: 120, width: 120 }}
                />
              </Box>
              <Paper elevation={24} sx={{ margin: 2 }}>
                {" "}
                <List>
                  {" "}
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete" id="Username">
                        {Data.firstName}
                      </IconButton>
                    }
                  >
                    Name
                  </ListItem>
                  <Divider />
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete" id="userEmail">
                        {Data.email}
                      </IconButton>
                    }
                  >
                    Email
                  </ListItem>
                  <Divider />
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        3
                      </IconButton>
                    }
                  >
                    Recent Post{" "}
                  </ListItem>
                  <Divider />
                </List>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Typography textAlign="center" variant="h4">
              User Posts
            </Typography>
          </Grid>
        </Grid>
        {userPosts !== null && (
          <Box component="div" id="container">
            {userPosts.map(function (item, i) {
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
                        "https://backend-z03p.onrender.com/assets/" +
                        item.userPicturePath
                      }
                      xm="5"
                    />
                    <Box sx={{ bgcolor: "" }} component={"span"}>
                      <Typography variant="h5">
                        {item.firstName} {item.lastName}
                      </Typography>
                    </Box>
                  </Stack>
                  {item.picturePath !== null && (
                    <Box
                      component="img"
                      sx={{ width: "500px", height: "500px", ml: 6 }}
                      src={
                        "https://backend-z03p.onrender.com/assets/" +
                        item.picturePath
                      }
                    ></Box>
                  )}
                  <Box
                    id="userContent"
                    sx={{ bgcolor: "aliceblue", ml: 6, mt: 2 }}
                  >
                    {item.userContent}
                  </Box>
                  <Stack direction={"row"} sx={{ ml: 6, mt: 1 }} spacing={2}>
                    <Button color="primary" variant="contained">
                      <Typography variant="h7">
                        {Object.keys(item.likes).length}{" "}
                      </Typography>
                      {item.likes[item.userId] ? (
                        <ThumbDownIcon />
                      ) : (
                        <ThumbUpAltIcon color="" />
                      )}
                    </Button>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => {
                        setcommentSectionshow(
                          commentSectionshow ? false : true
                        );
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
              );
            })}
          </Box>
        )}
      </>
    )
  );
};
export default HomePageNotify;
