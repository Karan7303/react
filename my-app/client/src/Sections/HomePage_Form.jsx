import axios from "axios";
import { Box, TextField, Button } from "@mui/material";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../state/slice";
function HomePage_Form() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const _pictureFile = data.get("picture");
    var text = data.get("postText");
    var pictureName = data.get("picture").name;
    
    axios
      .post(
        "https://test-9o0j.onrender.com/post",
        {
          userContent: text,
          picturePath: pictureName === "" ? null : pictureName,
          pictureFile: _pictureFile,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        
        const data = response.data;
        dispatch(setPosts({ posts: data }));
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
export default HomePage_Form;
