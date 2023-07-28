import { useEffect, useState } from "react";

import { Paper, Avatar, Grid } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

function Comment(props) {
  const token = useSelector((state) => state.token);
  const [listedUser, setlistedUser] = useState("");
  // var listedUser = null;
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL + "/user/" + props.props.userId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        setlistedUser(response.data.userSelect);
      });
  }, []);

  return (
    <>
      {listedUser !== null && (
        <Paper
          style={{
            padding: "5px 5px",
            marginTop: 10,
            marginLeft: 46,
            width: 500,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar
                alt="Remy Sharp"
                src={
                  process.env.REACT_APP_URL + "/assets/" + listedUser.picture
                }
              />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>
                {" "}
                {listedUser.firstName} {listedUser.lastName}
              </h4>
              <p style={{ textAlign: "left" }}>{props.props.content}</p>
              <p style={{ textAlign: "left", color: "gray" }}>
                {props.props.date}
              </p>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
}
export default Comment;
