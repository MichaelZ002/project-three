import React, { useEffect } from 'react';
import { Grid, Paper } from "@material-ui/core";
import Navbar from "../navbar/navbar";
import SideBar from './sidebar';
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/styles';
import ToDoList from "./index";
import API from '../../utils/API';
let vidID = ""


const useStyles = makeStyles((theme) => ({

    textarea: {
        top: 0,
        marninLeft: "15px",
        width: "100%",
        height: "100%",
    },
    wrapper: {
        position: "relative",
        paddingTop: "56.25%"
    },

    player: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    paper: {
        textAlign: 'center',
        backgroundColor: "#fff5e6",
        minHeight: "175px"

    },


}));
//define axios call, return vid id

const Project = () => {
    //call a function that pulls / returns vid id
    function getVid(){
        API.getVidFromDB()
        .then(res => console.log(res))
        // .catch(err => console.log(err))
        .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
    }
    useEffect(() => {
        getVid()
    }, [])

    const classes = useStyles();
    return (
        <>

            < Navbar />
            <Grid container spacing={2}>
                <Grid item xs={2} sm={2}>
                    < SideBar />
                </Grid>

                <Grid item xs={10} sm={10} md={5}style={{ marginTop: "35px" }}>
                    <div className={classes.wrapper}>
                        <ReactPlayer
                            className={classes.player}
                            playing={false}
                            url={`https://www.youtube.com/embed/${vidID}`}
                            width='100%'
                            height='100%'
                        />
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={1} style={{ marginTop: "35px" }}>
                    < div />
                </Grid>
                <Grid item xs={10} sm={10} md={4}style={{ marginTop: "35px" }} justify="center">
                    {/* <Paper className={classes.paper} elevation="5">
                        <h3>Materials Needed</h3>
                        < ToDoList />
                    </Paper> */}
                </Grid>
                <Grid item xs={2} sm={2} style={{ marginTop: "35px" }}>
                    < div />
                </Grid>
                <Grid item xs={10} sm={10} style={{ marginTop: "35px" }}>
                    <Paper className={classes.paper}>
                        <h3>My Project Blueprints</h3>
                        < ToDoList />
                    </Paper>
                </Grid>
            </Grid>

        </>
    )
}

export default Project;
