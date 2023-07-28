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
    var commentText = document.getElementById(post_id._id).value;
    document.getElementById(post_id._id).innerHTML=""
    axios
      .patch(
        process.env.REACT_APP_URL+"/post/comment/",
        {
          params: { postID: id._id,
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

        //dispatch(setPost({ post: response.data }));
        post_id.setuserPost(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form>
      <TextField
        sx={{ml:6,mt:2,width:500}}
        type="text"
        label="Add a Comment"
        variant="outlined"
        id={post_id._id}
      />
      <br />
      <Button
        onClick={() => updateComment(post_id)}
        variant="contained"
        color="primary"
        sx={{ml:6,mt:.5}}
      >
        Comment
      </Button>
    </form>
  );
}
export default CommentForm;
