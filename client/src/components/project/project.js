import React from 'react';
import { Grid, Paper } from "@material-ui/core";
import Navbar from "../navbar/navbar";
import SideBar from './sidebar';
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/styles';
import ToDoList from "./index";


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


const Project = () => {
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
                            playing
                            url={`https://www.youtube.com/embed/jByKArMfutQ`}
                            width='100%'
                            height='100%'
                        />
                    </div>
                </Grid>
                <Grid item xs={2} sm={2} md={1} style={{ marginTop: "35px" }}>
                    < div />
                </Grid>
                <Grid item xs={10} sm={10} md={4}style={{ marginTop: "35px" }} justify="center">
                    <Paper className={classes.paper} elevation="5">
                        <h3>Materials Needed</h3>
                        < ToDoList />
                    </Paper>
                </Grid>
                <Grid item xs={2} sm={2} style={{ marginTop: "35px" }}>
                    < div />
                </Grid>
                <Grid item xs={10} sm={10} style={{ marginTop: "35px" }} justify="center">
                    <Paper className={classes.paper} elevation="5">
                        <h3>Blue prints of my project</h3>
                        < ToDoList />
                    </Paper>
                </Grid>
            </Grid>

        </>
    )
}

export default Project;
