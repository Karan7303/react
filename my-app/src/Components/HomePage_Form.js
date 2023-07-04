import axios from "axios";
import { Box, TextField, Button } from "@mui/material";
import "../App.css";
function HomePage_Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const _pictureFile = data.get("picture");
    var text = data.get("postText");
    var pictureName = data.get("picture").name;
    axios
      .post(
        "http://localhost:3001/post",
        {
          userContent: text,
          picturePath: pictureName === "" ? null : pictureName,
          pictureFile: _pictureFile,
        },
        {
          headers: {
            Authorization: sessionStorage.getItem("Authorization"),
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1, bgcolor: "beige" }}
    >
      {" "}
      <TextField name="postText" sx={{ bgcolor: "white" }} fullWidth />
      <Box sx={{ m: 0, p: 1, bgcolor: "whitesmoke" }}>
        <Button variant="contained" component="label">
          {" "}
          Attach
          <input name="picture" hidden accept="image/*" type="file" />
        </Button>
        <Button variant="contained" type="submit">
          {" "}
          Post
        </Button>
      </Box>
    </Box>
  );
}
export default HomePage_Form