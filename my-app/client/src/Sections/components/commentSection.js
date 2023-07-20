import {React,useState} from "react";
import ReactDOM from "react-dom";

import { Paper, Avatar, Grid } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function CommentSection(props) {
  const token = useSelector((state) => state.token);
  const [listedUser, setlistedUser] = useState("");
  const getUser=(id)=>{
    axios
      .get("https://backend-z03p.onrender.com/user/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        //dispatch(setFriends({friends:response.data[0].friends}))
        setlistedUser(response.data.userSelect);
        //console.log(response.data[0].friends);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  var user = props.props;
  return (
    <>
      {user.comments.map(function (item, i) {
        
        getUser(item.userId)
        return (
          <Paper
            style={{ padding: "5px 5px", marginTop: 10, marginLeft: 46 }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar
                  alt="Remy Sharp"
                  src={
                    "https://backend-z03p.onrender.com/assets/" +
                    listedUser.picture
                  }
                />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>
                  {" "}
                  {listedUser.firstName} {listedUser.lastName}
                </h4>
                <p style={{ textAlign: "left" }}>{item.content}</p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  {item.date}
                </p>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </>
  );
}
export default CommentSection;
