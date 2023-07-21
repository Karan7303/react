import { Box, Stack, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function FriendListFriend({ friend }) {
  const token = useSelector((state) => state.token);
  const [listedUser, setlistedUser] = useState(null);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL+"/user/" + friend, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        //dispatch(setFriends({friends:response.data[0].friends}))
        setlistedUser(response.data.userSelect);
        //console.log(response.data[0].friends);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //useEffect(() => {}, []);
  return (
    <>
      {listedUser === null ? (
        <Box></Box>
      ) : (
        <Stack
          direction={"row"}
          spacing={2}
          bgcolor={"whitesmoke"}
          sx={{
            boxShadow:
              "2px 2px 5px aliceblue,2px 2px 17px black,2px 2px 25px aliceblue",
          }}
        >
          {" "}
          <Avatar
            alt="default.png"
            src={process.env.REACT_APP_URL+"/assets/" + listedUser.picture}
            sizes=""
          />
          {" "}
          <Typography variant="h5" sx={{ mt: .8, pt: .8 }}>
            {" "}
            {listedUser.firstName} {listedUser.lastName}
          </Typography>
        </Stack>
      )}
    </>
  );
}
export default FriendListFriend;
