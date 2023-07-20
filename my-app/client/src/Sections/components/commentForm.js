import React from "react";
import ReactDOM from "react-dom";
import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";

function CommentForm(post_id) {
  const token = useSelector((state) => state.token);

  const updateComment = (id) => {
    console.log(token);
    axios
      .patch(
        "https://backend-z03p.onrender.com/post/comment/",
        {
          params: { postID: id.props },
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form>
      <TextField
        style={{ marginLeft: "46px", width: "550px", margin: "15px" }}
        type="text"
        label="Add a Comment"
        variant="outlined"
        id="commentText"
      />
      <br />
      <Button
        onClick={() => updateComment(post_id)}
        variant="contained"
        color="primary"
        style={{ marginLeft: "46px" }}
      >
        Comment
      </Button>
    </form>
  );
}
export default CommentForm;
