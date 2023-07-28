import "./App.css";
import Navbar from "./Sections/Navbar";
import SideBar from "./Sections/HomePage_sideBar";
import Posts from "./Sections/HomePage_Post";
import FriendList from "./Sections/HomePage_Friends";
import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";


import HForm from "./Sections/HomePage_Form";
import { useSelector } from "react-redux";
function Home_Page() {
  console.log("homepage-parent");
  const user = useSelector((state) => state.user);
  return (
    <React.Fragment>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SideBar {...user}/>
        </Grid>
        <Grid item xs={5}>
          <HForm />
          <Posts/>
        </Grid>
        <Grid item xs={3}>
          <FriendList friends={user.friends} />;
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default Home_Page;
