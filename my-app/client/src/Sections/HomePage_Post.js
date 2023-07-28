import { Box } from "@mui/material";
import axios from "axios";
import "../App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts} from "../state/slice";
import Post from "./components/post";
function HomePage_Post() {
  const postData = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {

    axios
      .get(process.env.REACT_APP_URL + "/post", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        const data = response.data.post;
        console.log(data);
        dispatch(setPosts({ posts: data }));
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);

  return (
    postData !== null && (
      <Box component="div" id="container">
        {postData.map(function (item, i) {
          return (
            <>
              <Post post={item} />
            </>
          );
        })}
      </Box>
    )
  );
}

export default HomePage_Post;
