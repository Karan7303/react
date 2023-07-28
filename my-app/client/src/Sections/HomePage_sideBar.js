import { Box, List, ListItem, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";

function HomePage_sidebar(loggedInUser) {
  const page = (window.location.href.split('/')[4]);
  //const loggedInUser = useSelector((state) => state.user);
  return (
    loggedInUser !== null && (
        <Card sx={{ Width: "100%",m:2 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image={process.env.REACT_APP_URL + "/assets/" + loggedInUser.picture}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {loggedInUser.firstName} {loggedInUser.lastName}        
           </Typography>
          <Typography variant="body2" color="text.secondary">
            {loggedInUser.bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
  );
}

export default HomePage_sidebar;
