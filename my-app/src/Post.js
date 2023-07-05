import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./Sections/Navbar";
import Grid from "@mui/material/Grid";
import React from "react";
function Post() {
  return (
    <React.Fragment>
      <Navbar />
      <Box
          sx={{
            mt: 8,
            bgcolor:'blue',
            width:'150',
            height:'120',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        Create a Post
      
      </Box>
    </React.Fragment>
  );
}

export default Post;
