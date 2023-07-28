import { Box,Typography } from "@mui/material";
import FriendListFriend from "./components/friendListFriend";
function Friend_List({ friends }) {
  return (
    <Box
      sx={{
        bgcolor: "aliceblue",
        border: "solid 0.1em",
        minwidth: 300,
        height: 300,
        margin: 2,
        p: 2,
      }}
    >
      <Typography align="center" variant="h4" fontFamily={"cursive"}>
        Friends List{" "}
      </Typography>
      {friends.length === 0 ? (
        <Typography align="center"> User has no friends</Typography>
      ) : (
        friends.map((friend) => {
          return (
            <Box sx={{ m: 1 }}>
              <FriendListFriend friend={friend} />
            </Box>
          );
        })
      )}
    </Box>
  );
}

export default Friend_List;
