import { TextField, Button, Stack, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
function MessageForm(props) {
  async function sendMessage() {
    await props.socket.emit("send_Msg", {
      message: currentMsg,
      socket_id: props.socket.id,
      to:props.to,
      author: props.user.firstName,
      picture: props.user.picture,
      time: new Date().getHours + ":" + new Date().getMinutes,
    });
    // document.getElementById(props.socket.id).value=""
  }
  const [currentMsg, setcurrentMsg] = useState(null);

  return (
    <Stack direction={"row"}>
      <TextField
        id={props.socket.id}
        type="text"
        label="Send a Message"
        variant="outlined"
        minwidth={"100%"}
        onChange={(e) => setcurrentMsg(e.currentTarget.value)}
      />
      <Button
        onClick={() => sendMessage()}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Stack>
  );
}
export default MessageForm;
