import { Grid, TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";
import UserCard from "./cardComponent";

function App() {
  const [error, seterrors] = useState({
    username: { error: false, errorText: "" },
    password: { error: false, errorText: "" },
  });
  const [user, setUser] = useState({});
  const [userDetails, setUserDetails] = useState({});

  const handleSubmit = () => {
    if (!user.username) {
      seterrors({
        ...error,
        username: { error: true, errorText: "username id is required" },
      });
    } else {
      seterrors({
        ...error,
        username: { error: false, errorText: "" },
      });
    }
    if (!user.password) {
      seterrors({
        ...error,
        password: { error: true, errorText: "Password is required" },
      });
    } else {
      seterrors({
        ...error,
        password: { error: false, errorText: "" },
      });
    }
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserDetails(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid container sx={{ width: "500px" }} spacing={3}>
        <Grid xs={12} md={12}>
          <Typography
            variant="h4"
            sx={{ marginTop: "50px" }}
            textAlign={"center"}
          >
            Login Example
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            name="username"
            label="Username"
            error={error?.username.error}
            helperText={error?.username.errorText}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            label="Password"
            name="password"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            error={error?.password.error}
            helperText={error?.password.errorText}
          />
        </Grid>
        <Grid item xs={12} md={12} textAlign={"center"}>
          <Button variant="contained" onClick={() => handleSubmit()}>
            Login
          </Button>
        </Grid>
        <Grid xs={12} md={12}>
          {userDetails?.id && <UserCard userDetails={userDetails} />}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
