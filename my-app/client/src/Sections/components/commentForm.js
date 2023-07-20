import React from "react";
import ReactDOM from "react-dom";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setPost } from "../../state/slice";

function CommentForm(post_id) {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const updateComment = (id) => {
    var commentText = document.getElementById(post_id.props).value;
    axios
      .patch(
        "https://backend-z03p.onrender.com/post/comment/",
        {
          params: { postID: id.props,
            commentText:commentText
           },
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(function (response) {
        console.log(response);

        dispatch(setPost({ post: response.data }));

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
        id={post_id.props}
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
