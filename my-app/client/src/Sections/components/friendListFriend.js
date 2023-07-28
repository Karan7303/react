import { Box, Stack, Avatar, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function FriendListFriend(props) {
  console.log("FrFriendListFriend");
  const token = useSelector((state) => state.token);
  const [listedUser, setlistedUser] = useState(null);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL + "/user/" + props.friend, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        setlistedUser(response.data.userSelect);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {listedUser === null ? (
        <Box></Box>
      ) : (
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
              src={process.env.REACT_APP_URL + "/assets/" + listedUser.picture}
              sizes=""
            />{" "}
            <Typography variant="h5" sx={{ mt: 0.8, pt: 0.8 }}>
              {" "}
              {listedUser.firstName} {listedUser.lastName}
            </Typography>
          </Stack>
        </Paper>
      )}
    </>
  );
}
export default FriendListFriend;
