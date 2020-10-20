import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import VidPlayer from "../youtube/vidPlayer";
import DeleteBtn from "../DeleteBtn";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "../button";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";

export default (props) => {
  const [uHasData, setUHasData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (uHasData.length <= 1 && props.user) {

      console.log("Hey! You found some data!");
      console.log(props.user.uid);
      grabUserData(props.user.uid);
    }
  }, []);


  function createNewProject(favID, uid) {
    console.log(`${favID} ${uid}`);
    axios({
      method: "post",
      url: "/api/projects",
      data: { favID, uid }
    })
      .then(() => {
        console.log("/project working");
      })
      .catch((err) => console.log(err));
    history.push("/project");
  }
  function grabUserData(uid) {
    let randomNum = Math.floor(Math.random() * (10 - 3) + 3);


    API.getUserData(uid)
      .then((res) => {
        console.log("my data ", res.data);
        setUHasData(res.data);
      })
      .catch((err) => console.log(err));
      
  }
  function destroyUserData(favID) {
    API.deleteUserData(props.user.uid, favID)
      .then((res) => grabUserData(props.user.uid))
      .catch((err) => console.log(err));
  }
  const useStyles = makeStyles((theme) => ({
    myh1: {
      marginTop: "5vh",
      textAlign: "center",
    },
    moreH: {
      textAlign: "center",
      marginTop: "2vh",
    },
    root: {
      flexGrow: 1,
      marginTop: "5vh",
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      position: "relative",
      minWidth: "645px",
      margin: "15px",
      maxHeight: "max-content"
   
    },
    childVid: {
      position: "absolute",
      marginTop: "0",
      left: "30px",
      width: "fit-content",
    },
    nestDiv: {
      flexGrow: 1,
      marginLeft: "25px",
    },
    detailItems: {
      marginTop: "10px",
      minWidth: "333px",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <h1 className={classes.myh1}>Favorites</h1>
      <h2 className={classes.moreH}>The land of opportunity awaits!</h2>
      <h3 className={classes.moreH}>
        View your favorited videos and create a new project!
      </h3>

      <div className={classes.root}>
        <Grid container spacing={2}>
          {uHasData.map((fav) => {
            return (
              <Grid item lg={6} key={fav._id}>
                <Paper
                  className={classes.paper}
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    paddingTop: "6vh",
                  }}
                >
                  <div style={{ display: "inline-flex" }}>
                    <div>
                      <VidPlayer
                        className={classes.childVid}
                        videoId={fav.faveVids[0]}
                      />
                      <Button onClick={() => createNewProject(fav._id, props.user.uid)}>
                        Create a Project
                      </Button>
                    </div>

                    <div className={classes.nestDiv}>
                      <Grid container spacing={2}>
                        <Grid container item lg={12} spacing={2}>
                          <Grid item sm={8} md={7} lg={9}>
                            {/* Channel Name */}
                            <h3
                              style={{
                                textDecoration: "bold",
                                marginLeft: "-13px",
                                paddingLeft: "0",
                              }}
                            >
                              {fav.youtuber}
                            </h3>
                          </Grid>

                          <Grid item sm={4} md={5} lg={3}>
                            <DeleteBtn
                              onClick={() => destroyUserData(fav._id)}
                              style={{
                                marginTop: "0",
                                position: "absolute",
                                right: "1vw",
                                fontSize: "25px",
                                fontWeight: "bold",
                              }}
                            />
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          item
                          xs={12}
                          spacing={3}
                          style={{ paddingTop: "5px" }}
                        >
                          {/* Video Date */}
                          <p
                            style={{
                              textDecoration: "italics",
                              marginTop: "5px",
                            }}
                          >
                            {dayjs(fav.vidDate).format("MMMM DD, YYYY")}
                          </p>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          spacing={3}
                          className={classes.detailItems}
                        >
                          {/* Video Title */}
                          <h4>{fav.title}</h4>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          spacing={3}
                          className={classes.detailItems}
                        >
                          {/* Details + youtube more button */}
                          <p>
                            {fav.details}
                            <a
                              id="gradientAnchors"
                              href={`https://www.youtube.com/watch?v=${fav.faveVids[0]}`}
                              style={{ marginLeft: "6px" }}
                              target="blank"
                            >
                              See more on Youtube
                            </a>
                          </p>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

//  add this to delete button marginLeft: "5vw"
