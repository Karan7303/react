import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Alert, AlertTitle } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { setLoginUser } from "./state/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

var errorThrow = false;
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        CS476 Social Media Web APP
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const [emailEntered, setemailEntered] = useState("");
  const emailValidate = (event) => {
    setemailEntered(event.currentTarget.value);
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (!emailEntered.match(validRegex)) {
      document.getElementById("temp").hidden = false;

      document.getElementById("emailAlert").innerHTML =
        "Invalid email address!";
    } else document.getElementById("temp").hidden = true;
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const _email = data.get("email");
    const _password = data.get("password");
    axios
      .post(process.env.REACT_APP_URL+"/auth/login", {
        email: _email,
        password: _password,
      })
      .then(function (response) {
        
        if (response.data.match === true) {
          document.getElementById("warning").hidden = true;

          dispatch(
            setLoginUser({
              user: response.data.user,
              token: response.data.token,
            })
          );
          navigate("/home");
        }
        if (response.data.match === false) {
          document.getElementById("warning").hidden = false;

          document.getElementById("Alert1").innerHTML = response.data.msg;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    //
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <span id="warning" hidden>
            <Alert severity="warning" id="Alert1"></Alert>
          </span>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {" "}
            <span id="temp">
              <Alert severity="error" id="emailAlert" hidden></Alert>
            </span>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => emailValidate(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <button onClick={() => navigate("/Signup")} variant="body2">
                  {"Don't have an account? Sign Up"}
                </button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
