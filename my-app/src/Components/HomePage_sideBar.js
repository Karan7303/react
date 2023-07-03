import { Box, List, ListItem, Stack } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomePage_sidebar() {
  useEffect(() => {
    //axios.get('user/:'+sessionStorage.getItem('Authorization'))
    axios.get("http://localhost:3001/user/id", {
      headers: {
        'Authorization': sessionStorage.getItem("Authorization"),
      },
    }).then(function (response){
      document.getElementById('Username').innerHTML=response.data.user.firstname
      document.getElementById('userEmail').innerHTML=response.data.user.email

      
    }
    );
  }, []);
  return (
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
          src="default.png"
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
                1
              </IconButton>
            }
          >
            Name
          </ListItem>
          <Divider />
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete" id="userEmail">
                2
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
  );
}
export default HomePage_sidebar;
