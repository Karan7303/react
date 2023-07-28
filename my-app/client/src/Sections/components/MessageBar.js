import { Box, Avatar, Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import MessageForm from "./MessageForm";
function MessageBar({ props }) {
  const user = useSelector((state) => state.user);
  const listedUser = props;

  return (
    <>
      <Box
        bgcolor={"aliceblue"}
        minWidth={"100vh"}
        minHeight={"85vh"}
        sx={{
          border: [2, "dotted"],
        }}
      >
        <Box display={"flex"}>
          {" "}
          <Avatar
            alt="default.png"
            src={process.env.REACT_APP_URL + "/assets/" + listedUser.picture}
            sizes=""
          />{" "}
          <Typography variant="h5"></Typography>
        </Box>
      </Box>

      
    </>
  );
}

export default MessageBar;
