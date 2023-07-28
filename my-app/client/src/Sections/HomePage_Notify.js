import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import Sidebar from "./HomePage_sideBar"
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Post from "./components/post";
import axios from "axios";

const HomePageNotify = () => {
  const { state } = useLocation();
  const { userId } = state;
  const loggedInUser = useSelector((state) => state.user);
  const [userPosts, setuserPosts] = useState(null);
  const token = useSelector((state) => state.token);
  const [Data, setData] = useState(null);
  useEffect(() => {
    //axios.get('user/:'+sessionStorage.getItem('Authorization'))

    if (loggedInUser._id !== userId._id) {
      axios
        .get(process.env.REACT_APP_URL + "/user/" + userId._id, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(function (response) {
          setData(response.data.user);
        })
        .catch(function (error) {
          console.log("user" + error.response);
        });
    } else setData(loggedInUser);
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },

      params: { _id: userId._id },
    };

    axios
      .get(process.env.REACT_APP_URL + "/post/postId", config)
      .then(function (response) {
        const data = response.data.post;
        console.log(response.data.post);
        setuserPosts(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    Data !== null && (
      <>
        <Navbar />
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ m: 1 }}>
            {/* <Box
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
                  src={process.env.REACT_APP_URL + "/assets/" + Data.picture}
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
            </Box> */}
            <Sidebar {...Data}/>

          </Grid>
          <Grid item xs={6}>
            {" "}
            <Typography textAlign="center" variant="h4">
              User Posts
            </Typography>
            {userPosts !== null && (
              <Box component="div" id="container">
                {userPosts.map(function (item, i) {
                  return <Post post={item} />;
                })}
              </Box>
            )}
          </Grid>
        </Grid>
      </>
    )
  );
};
export default HomePageNotify;
