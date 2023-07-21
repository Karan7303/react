import { Box, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import { alignProperty } from "@mui/material/styles/cssUtils";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

const HomePageNotify = () => {
  const { state } = useLocation();
  const { userId } = state;
  const loggedInUser = useSelector((state) => state.user);
  const [userPosts, setuserPosts] = useState(null)
  const token = useSelector((state) => state.token);

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
      .get("https://backend-z03p.onrender.com/post",{
        params: { _id: Data._id },
      }, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        const data = response.data.post;
        setuserPosts({ posts: data })
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);
  return (
    Data !== null && (<>
    <Navbar/>
      <Grid container spacing={2}>
        <Grid item xs={5} sx={{m:1}}>
        <Box
          sx={{
            bgcolor: "#87bd517a",
            minwidth: 300,
            height: 300,
            marginLeft: 5,
            padding:2
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
              src={"https://backend-z03p.onrender.com/assets/" + Data.picture}
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
        <Grid item xs={6}> <Typography textAlign="center"variant="h4">User Posts</Typography>
        
        </Grid>
      </Grid>
      </>
    )
  );
};
export default HomePageNotify;
