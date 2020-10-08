import React from 'react';
import { Box, Button, Grid, Paper, TextField, Typography, FormControlLabel, Checkbox} from "@material-ui/core";
import Navbar from "../navbar/navbar";
import SideBar from './sidebar';
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/styles';
import TextareaAutosize from './textArea';


const useStyles = makeStyles(theme => ({
    textarea : {
        padding : "20px",
        width: "500px",
    },


}));


const Project = ()=> {
    const classes  = useStyles();
    return (
        <>
            < Navbar />
            <Grid container>
                <Grid item xs={2} sm={2}>
                    < SideBar />
                </Grid>
                    <Grid item xs={10} sm={4} style={{marginTop: "15px"}}>
                        <div id="projectVideo">
                            <ReactPlayer url='https://www.youtube.com/watch?v=ynDv4V9OtWY' playing />
                        </div>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                        <div />
                    </Grid>
                    <Grid item xs={10} sm={5} style={{marginTop: "15px"}}>
                        <h2>Notes</h2>
                        < TextareaAutosize className={classes.textarea}/>
                   </Grid>
            </Grid>

        </>
    )
}

export default Project;
