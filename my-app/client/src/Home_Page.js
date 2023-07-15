import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./Sections/Navbar";
import SideBar from "./Sections/HomePage_sideBar";
import Posts from "./Sections/HomePage_Post";
import FriendList from "./Sections/HomePage_Friends";
import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

import HForm from "./Sections/HomePage_Form";
import { useSelector } from "react-redux";
function Home_Page() {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const { _id, picture } = useSelector((state) => state.user);
  return (
    <React.Fragment>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
        <Grid item xs={5}>
          <HForm />
          <Posts userID={_id} />
        </Grid>
        <Grid item xs={3}>
          <FriendList friends={user.friends} />;
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default Home_Page;
