import { Box, List, ListItem, Stack } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomePage_sidebar() {
  const [Data, setData] = useState(null);
  useEffect(() => {
    //axios.get('user/:'+sessionStorage.getItem('Authorization'))
    axios
      .get("http://localhost:3001/user/id", {
        headers: {
          Authorization: sessionStorage.getItem("Authorization"),
        },
      })
      .then(function (response) {
        setData(response.data.user);

        // document.getElementById('Username').innerHTML=response.data.user.firstname
        // document.getElementById('userEmail').innerHTML=response.data.user.email
        // document.getElementById('profileP').src=response.data.user.picture
      });
  }, []);
  return (
    Data !== null && (
      <Box
        sx={{
          bgcolor: "lightblue",
          minwidth: 300,
          height: 300,
          margin: 1,
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
            src={"http://localhost:3001/assets/" + Data.picture}
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
                  {Data.firstname}
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
    )
  );
}
export default HomePage_sidebar;
