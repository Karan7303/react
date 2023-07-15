import { Box, Stack, Avatar, Typography } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setFriends, setLoginUser } from "../state/slice";
import FriendListFriend from "./components/friendListFriend";
function Friend_List({ friends }) {
  return (
    <Box
      sx={{
        bgcolor: "",
        border: "solid 0.1em",
        minwidth: 300,
        height: 300,
        margin: 2,
        p: 2,
      }}
    >
      <Typography align="center" variant="h4">
        Friends List{" "}
      </Typography>
      {friends.length === 0 ? (
        <Typography align="center"> User has no friends</Typography>
      ) : (
        friends.map((friend) => {
          return <FriendListFriend friend={friend} />;
        })
      )}
    </Box>
  );
}

export default Friend_List;
