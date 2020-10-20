import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { LockRounded, EmailRounded } from "@material-ui/icons";
import Image from "../../images/bg.jpg";
import Typed from "react-typed";
import { auth } from "../../firebase";

const useStyles = makeStyles(() => ({
  title: {
    color: "#EE0979",
  },
  subcontainerRight: {
    background: "linear-gradient(to right bottom, #fff, #fff, #ffb84d)",
  },
  loginBackground: {
    justify: "center",
    minHeight: "30vh",
    padding: "50px",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& label": {
      color: "tomato",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray",
      },
      "&:hover fieldset": {
        borderColor: "tomato",
      },
      "& .Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customerName, setCustomerName] = useState("");
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "customerName") {
      setCustomerName(value);
    }
  };
  const classes = useStyles();
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src={Image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="background"
          />
        </Grid>
        <Grid
          container
          className={classes.subcontainerRight}
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 400,
              minWidth: 300,
            }}
          >
            <Grid container justify="center">
              <Typography component="h1" className={classes.title} variant="h3">
                <Typed
                  strings={["DIWHY"]}
                  typeSpeed={100}
                  backSpeed={100}
                  loop
                />
              </Typography>
            </Grid>
            <br />
            <Grid container justify="center">
              <Typography
                component="h1"
                variant="h5"
                style={{ color: "black" }}
              >
                Sign Up
              </Typography>
            </Grid>
            {/* <InputField
              label="Name"
              name="customerName"
              value={customerName}
              placeholder="Your Name Here"
              margin="normal"
              variant="outlined"
              onChange={onChangeHandler}
              InputProps={{
                style: { color: "black" },
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "black" }}>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            /> */}
            <InputField
              label="Email"
              margin="normal"
              name="email"
              onChange={onChangeHandler}
              variant="outlined"
              value={email}
              InputProps={{
                style: { color: "black" },
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "black" }}>
                    <EmailRounded />
                  </InputAdornment>
                ),
              }}
            />
            <InputField
              type="password"
              label="Password"
              name="password"
              value={password}
              margin="normal"
              variant="outlined"
              onChange={onChangeHandler}
              InputProps={{
                style: { color: "black" },
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "black" }}>
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 20 }} />
            <Button
              color="primary"
              variant="contained"
              style={{
                background: "linear-gradient(to left, #ee0979, #ff6a00)",
              }}
              onClick={() =>
                auth
                  .createUserWithEmailAndPassword(email, password)
                  .then((data) => {
                    console.log(data.user.uid);
                    history.push("/home");
                  })
                  .catch((err) => console.log(err))
              }
            >
              Sign Up
            </Button>
            <div style={{ height: 20 }} />
            <Link to="/sign-in">Already registered? Login here</Link>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};
export default Signup;
