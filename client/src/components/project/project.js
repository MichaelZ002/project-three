import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import Navbar from "../navbar/navbar";
import SideBar from "./sidebar";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/styles";
import ToDoList from "./index";
import axios from "axios"
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  textarea: {
    top: 0,
    marninLeft: "15px",
    width: "100%",
    height: "100%",
  },
  wrapper: {
    position: "relative",
    paddingTop: "56.25%",
  },
  player: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  paper: {
    textAlign: "center",
    backgroundColor: "#fff5e6",
    minHeight: "175px",
    position: "relative",
  },
}));
//define axios call, return vid id

const Project = () => {
  const [vidData, setVidData] = useState("");
  function getVid() {
    axios({
        method: "get",
        url: "/api/projectvid"
    })
      .then((res) => {
        console.log(res);
        setVidData(res.data[0].faveVids)
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getVid();
  }, []);

  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={2} sm={2} lg={2}>
          <SideBar />
        </Grid>

        <Grid
          item
          xs={10}
          sm={10}
          md={5}
          lg={5}
          style={{ marginTop: "35px", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className={classes.wrapper}>
            <ReactPlayer
              className={classes.player}
              playing={false}
              url={`https://www.youtube.com/embed/${vidData}`}
              width="100%"
              height="100%"
            />
          </div>
        </Grid>
        {/* <Grid item xs={2} sm={2} md={1} style={{ marginTop: "35px", }}>
                    < div />
                </Grid> */}
        {/* <Grid item xs={10} sm={10} md={4}style={{ marginTop: "35px" }} justify="center">
                    <Paper className={classes.paper} elevation="5">
                        <h3>Materials Needed</h3> */}
        {/* < ToDoList /> */}
        {/* </Paper>
                </Grid> */}
        {/* <Grid item xs={2} sm={2} style={{ marginTop: "35px" }}>
                    < div />
                </Grid> */}
        <Grid
          item
          xs={10}
          sm={10}
          lg={12}
          style={{ marginTop: "35px", marginLeft: "16vw", marginRight: "1vw" }}
        >
          <Paper className={classes.paper}>
            <h3>My Project Blueprints</h3>
            <ToDoList />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Project;
