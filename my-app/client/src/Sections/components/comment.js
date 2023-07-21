import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Paper, Avatar, Grid } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function Comment(props) {
  const token = useSelector((state) => state.token);
  const [listedUser, setlistedUser] = useState("");
  // var listedUser = null;
  useEffect(() => {
     axios
      .get(process.env.REACT_APP_URL+"/user/" + props.props.userId, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        //dispatch(setFriends({friends:response.data[0].friends}))
        setlistedUser(response.data.userSelect);
        //
        //console.log(response.data[0].friends);
      })
  }, [])
  
  return (
    <>{
          listedUser !== null && (
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
                      process.env.REACT_APP_URL+"/assets/" +
                      listedUser.picture
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
          )
                  }
    </>
  );
}
export default Comment;
