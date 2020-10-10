import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { EmailRounded, LockRounded } from "@material-ui/icons";
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

// export default class Login extends Component {

const Login = () => {
  console.log(password);
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <div>
      <Grid
        container
        style={{ minHeight: "100vh" }}
        className={classes.subcontainerRight}
      >
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
                  strings={["DIWHY", "DIWHY"]}
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
                Sign In
              </Typography>
            </Grid>
            <InputField
              label="email"
              margin="normal"
              variant="outlined"
              name="email"
              id="email"
              value={email}
              InputProps={{
                style: { color: "black" },
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "black" }}>
                    <EmailRounded />
                  </InputAdornment>
                ),
              }}
              onChange={onChangeHandler}
            />
            <InputField
              type="password"
              variant="outlined"
              label="Password"
              id="password"
              name="password"
              value={password}
              margin="normal"
              InputProps={{
                style: { color: "black" },
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "black" }}>
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
              onChange={onChangeHandler}
            />

            <FormControlLabel
              control={<Checkbox value="remember" style={{ color: "black" }} />}
              label="Remember me"
              style={{ color: "black" }}
            />
            <div style={{ height: 20 }} />
            <Button
              color="primary"
              variant="contained"
              style={{
                background: "linear-gradient(to left, #ee0979, #ff6a00)",
              }}
              onClick={(event) => {
                auth
                  .signInWithEmailAndPassword(email, password)
                  .then((data) => {
                    console.log(data.user.uid);
                    history.push("/home");
                  })
                  .catch((err) => console.log(err));
              }}
            >
              Log In
            </Button>
            <div style={{ height: 20 }} />
            <Link to="/sign-up">Not registered, Sign up</Link>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
