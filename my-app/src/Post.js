import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./Components/Navbar";
import Grid from "@mui/material/Grid";
import React from "react";
function Post() {
  return (
    <React.Fragment>
      <Navbar />
      <Grid container spacing={2}>
        Create a Post
      </Grid>
    </React.Fragment>
  );
}

export default Post;
