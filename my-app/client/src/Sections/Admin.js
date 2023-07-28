import Navbar from "./Navbar";
import axios from "axios";
import Grid from "@mui/material/Grid";
import React from "react";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import {
  TextField,
  Stack,
  Select,
  MenuItem,
  Avatar,
  Paper,
} from "@mui/material";
import Sidebar from "./HomePage_sideBar";
function Admin() {
  const token = useSelector((state) => state.token);
  const loggedUser = useSelector((state) => state.user);
  const [searchPrefer, setsearchprefer] = useState("firstName");
  const [nameSearch, setnameSearch] = useState("");
  const [users, setusers] = useState([]);
  function handleSearch() {
    var config = {
      headers: {
        Authorization: "Bearer " + token,
      },

      params: { searchField: searchPrefer, FieldValue: nameSearch },
    };
    var url = process.env.REACT_APP_URL + "/user/";

    axios
      .get(url, config)
      .then(function (response) {
        setusers(response.data);
      })
      .catch((error) => console.log(error));
  }
  function handleDelete(id) {
    var url = process.env.REACT_APP_URL + "/user/delete";

    axios
      .patch(
        url,
        { data: { _id: id } },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (response) {
        setusers(response.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <React.Fragment>
      <Navbar />
      <Grid display={"flex"} margin={2} container spacing={2}>
        <Grid item xs={4}>
          <Sidebar {...loggedUser} />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Name"
            display="inline"
            sx={{ flexGrow: 1, m: 2 }}
            onChange={(e) => setnameSearch(e.target.value)}
          />
          <Select
            sx={{ height: "55px", m: 2 }}
            value={searchPrefer}
            label="Search Preference"
            display="inline"
            onChange={(e) => setsearchprefer(e.target.value)}
          >
            <MenuItem value={"firstName"}>Firstname</MenuItem>
            <MenuItem value={"lastName"}>Lastname</MenuItem>
            <MenuItem value={"Email"}>Email</MenuItem>
          </Select>
          <Button
            variant="contained"
            type="submit"
            sx={{ m: 2, height: "55px" }}
            onClick={handleSearch}
          >
            {" "}
            Search
          </Button>
          <Box sx={{ width: "60vh" }}>
            {users.length > 0 ? (
              users.map((user, i) => {
                return (
                  <Paper
                    style={{
                      padding: "5px 5px",
                      marginTop: 10,
                      width: "100%",
                      bgcolor: "aliceblue",
                    }}
                  >
                    <Stack direction={"row"} spacing={2} bgcolor={"whitesmoke"}>
                      {" "}
                      <Avatar
                        alt="default.png"
                        src={
                          process.env.REACT_APP_URL + "/assets/" + user.picture
                        }
                        sizes=""
                      />{" "}
                      <Typography variant="h5" sx={{ mt: 0.8, pt: 0.8 }}>
                        {" "}
                        {user.firstName} {user.lastName}
                      </Typography>
                      <PersonRemoveIcon
                        fontSize="large"
                        onClick={(e) => handleDelete(user._id)}
                      />
                    </Stack>
                  </Paper>
                );
              })
            ) : (
              <Typography variant="h5">No Users to Show</Typography>
            )}
          </Box>
        </Grid>{" "}
      </Grid>
    </React.Fragment>
  );
}
export default Admin;
