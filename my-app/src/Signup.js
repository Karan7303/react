import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const current = new Date().toISOString().split("T")[0];
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

export default function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const _email = data.get("email");
    const _password = data.get("password");
    const _firstName = data.get("F_Name");
    const _lastName = data.get("L_Name");
    const _dtob = data.get("dob");
    const _picture = data.get("picture").name;
    const _pictureFile = data.get("picture");
    axios
      .post(
        "http://localhost:3001/Signup",
        {
          email: _email,
          password: _password,
          firstName: _firstName,
          lastName: _lastName,
          date: _dtob,
          picture: _picture,
          pictureFile: _pictureFile,
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="First_Name"
              label="First Name"
              name="F_Name"
              autoComplete="First Name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Last_Name"
              label="Last Name"
              name="L_Name"
              autoComplete="Last Name"
              autoFocus
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
            <input
              type="date"
              placeholder="Enter BirthDate"
              name="dob"
              max={current}
              padding="2"
            />
            <br />
            <Button variant="contained" component="label">
              Upload
              <input name="picture" hidden accept="image/*" type="file" />
            </Button>
            <br></br>
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
              Sign up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="./" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
