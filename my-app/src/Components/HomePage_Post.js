import {
  Box,
  Avatar,
  Container,
  Button,
  Input,
  FormControl,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import axios from "axios";
import "../App.css";

function HomePage_Post() {
  const handleSubmit = (event) => {
    event.preventDefault();
    var text = document.getElementById("postText").value;
    console.log(text);
    axios
      .post(
        "http://localhost:3001/user/userPosts",
        {
          userContent: text,
          user: "karan",
        },
        {
          headers: {
            'Authorization':sessionStorage.getItem("Authorization"),
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
      });
  };
  return (
    <Container
      sx={{
        bgcolor: "lightgreen",
        minwidth: 300,
        p: 1,
        m: 2,
      }}
    >
      {/* <Box
        sx={{
          mt: 1,
          ml: 2,
          bgcolor: "white",
          width: 810,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField fullWidth />
        <Button> Post</Button>
        <Button> Attach</Button>
      </Box> */}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField id="postText" sx={{ bgcolor: "white" }} fullWidth />
        <Box sx={{ m: 0, p: 1, bgcolor: "whitesmoke" }} >
          <Button> Attach</Button>
          <Button type="submit"> Post</Button>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "blue", padding: 3, m: 2, mr: 10 }}>
        <Stack direction={"row"} spacing={2}>
          <Avatar alt="Remy Sharp" src="default.png" xs="1" />
          <Box component={"span"}> First Name Last Name</Box>
        </Stack>
        <Box>
          y's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Box>
        <Stack direction={"row"}>
          <Button color="secondary" variant="contained">
            {" "}
            Like{" "}
          </Button>
          <Button color="secondary" variant="contained">
            {" "}
            Comment{" "}
          </Button>
          <Button color="secondary" variant="contained">
            {" "}
            Share{" "}
          </Button>
        </Stack>
      </Box>
      <Box sx={{ bgcolor: "blue", padding: 3, m: 2, mr: 10 }}>
        <Stack direction={"row"} spacing={2}>
          <Avatar alt="Remy Sharp" src="default.png" xs="1" />
          <Box component={"span"}> First Name Last Name</Box>
        </Stack>
        <Box>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Box>
        <Stack direction={"row"}>
          <Button color="secondary" variant="contained">
            {" "}
            Like{" "}
          </Button>
          <Button color="secondary" variant="contained">
            {" "}
            Comment{" "}
          </Button>
          <Button color="secondary" variant="contained">
            {" "}
            Share{" "}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
export default HomePage_Post;
