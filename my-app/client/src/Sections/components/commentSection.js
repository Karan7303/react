import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Comment from "./comment";
import { Paper, Avatar, Grid } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

function CommentSection(props) {
  return (
    <>
      {props.props.comments.map(function (comment, i) {
        console.log(comment);
        return <Comment props={comment} />;
      })}
    </>
  );
}
export default CommentSection;
