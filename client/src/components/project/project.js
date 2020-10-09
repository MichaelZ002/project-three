import React from 'react';
import { Box, Button, Grid, Paper, TextField, Typography, FormControlLabel, Checkbox} from "@material-ui/core";
import Navbar from "../navbar/navbar";
import SideBar from './sidebar';
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/styles';
import TextareaAutosize from './textArea';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './theme';


const useStyles = makeStyles(theme => ({
    textarea : {
        padding : "20px",
        width: "500px",
    },


}));


const Project = ()=> {
    const classes  = useStyles();
    let factor = 0.3;
    return (
        <>
        
            < Navbar />
            < SideBar />
            <Grid container spacing={3}> 
                    <Grid item xs={12} sm={6} style={{marginTop: "15px"}}>
                        {/* <div id="projectVideo">
                            <ReactPlayer url='https://www.youtube.com/watch?v=ynDv4V9OtWY' playing />
                        </div> */}

<div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/jByKArMfutQ`}
        frameBorder="0"
      />
    </div>



                    </Grid>
                    <Grid item xs={12} sm={6}  style={{marginTop: "15px"}}>
                        <h2>Notes</h2>
                        < TextareaAutosize className={classes.textarea}/>
                   </Grid>
            </Grid>

        </>
    )
}

export default Project;
