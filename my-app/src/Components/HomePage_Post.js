import { Box, Avatar, Container, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Typography from "@mui/material/Typography";
import "../App.css";
import { useEffect, useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import { PostLike } from "./PostLike";

function HomePage_Post() {
  const [postData, setpostData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/post", {
        headers: {
          Authorization: sessionStorage.getItem("Authorization"),
        },
      })
      .then(function (response) {
        setpostData(response);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);
  const updateLike = (event)=>{
    axios
    .get("http://localhost:3001/post/:id", {
      headers: {
        Authorization: sessionStorage.getItem("Authorization"),
      },
    })
    .then(function (response) {
      setpostData(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });

  }
  return (
    postData !== null && (
      <Box component="div" id="container">
        {postData.data.post.map(function (item, i) {
          return (
            <Box
              key={i}
              //id="homePagepost"
              sx={{
                bgcolor: "aliceblue",
                border: "solid .0125em black",
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
                  src={"http://localhost:3001/assets/" + item.userPicturePath}
                  xm="5"
                />
                <Box sx={{ bgcolor: "red" }} component={"span"}>
                  <Typography variant="h5">
                    {item.firstName} {item.lastName}
                  </Typography>
                </Box>
              </Stack>
              {item.picturePath !== null && (
                <Box
                  component="img"
                  sx={{ width: "500px", height: "500px", ml: 6 }}
                  src={"http://localhost:3001/assets/" + item.picturePath}
                ></Box>
              )}
              <Box id="userContent" sx={{ bgcolor: "aliceblue", ml: 6, mt: 2 }}>
                {item.userContent}
              </Box>
              <Stack direction={"row"} sx={{ ml: 6, mt: 1 }}spacing={2}>
                <Button color="primary" variant="contained" onClick={PostLike(item._id)}>
                  <ThumbUpAltIcon color="" />
                </Button>
                <Button color="secondary" variant="contained">
                  <CommentIcon />
                </Button>
              </Stack>
            </Box>
          );
        })}
      </Box>
    )
  );
}

export default HomePage_Post;
