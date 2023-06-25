//import { Grid } from '@mui/material';
import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/HomePage_sideBar";
import Posts from "./Components/HomePage_Post";
import Notify from "./Components/HomePage_Notify";
import Grid from "@mui/material/Grid";
import React from "react";
function Home_Page() {
  return (
    <React.Fragment>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={6}>
          <Posts />
        </Grid>
        <Grid item xs={3}>
          <Notify />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Home_Page;
