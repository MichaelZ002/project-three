import React, { Component } from "react";
import { Button, Grid, InputAdornment, TextField, Typography, FormControlLabel, Checkbox, Card, CardActionArea, CardContent, CardMedia} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { AccountCircle, LockRounded , EmailRounded} from "@material-ui/icons";
import Image from "../../images/bg.jpg"
import Typed from "react-typed";


const useStyles = makeStyles((theme) => ({

    title: {
        color:"yellow"
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    subcontainerRight: {
        backgroundColor: "#bcc2d7"
    },
    cardContainer: {
        margin: "3rem",
        margin: "5rem auto"
    }
}))


const Signup = ()=> {
    
    const classes = useStyles();
        return (
            <div>
                <Grid container style={{ minHeight: "100vh"}}>
                    <Grid item xs={12} sm={6}>
                        <img src={Image} style={{ width: "100%", height: "100%", objectFit: "cover"}} alt="background"/>
                    </Grid>
                    <Grid container className={classes.subcontainerRight} item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{padding: 10}}>
                        <div />
                        <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300}}>
                        <Grid container justify="center" >
                           <Typography component="h1" className={classes.title} variant="h3"><Typed strings={["DIWHY"]} typeSpeed={40} backSpeed={60} loop/>
                           </Typography>
                           </Grid>
                           <br />
                           <Grid container justify="center" >
                           <Typography component="h1" variant="h5" style={{color:"white"}} >Sign Up
                           </Typography>
                           </Grid>
                           <TextField 
                           label="Name" 
                           margin="normal" 
                           variant="outlined"
                           InputProps={{ startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>}}
                           />
                           <TextField 
                           label="Email" 
                           margin="normal"
                           variant="outlined" 
                           InputProps={{ startAdornment: <InputAdornment position="start"><EmailRounded/></InputAdornment>}}
                           />
                           <TextField 
                           type="password" 
                           label="Password" 
                           margin="normal" 
                           variant="outlined"
                           InputProps={{ startAdornment: <InputAdornment position="start"><LockRounded /></InputAdornment>}}
                           />
                           <div style={{ height: 20}} />
                           <Button color="primary" variant="contained">Sign Up</Button>
                           <div style={{ height: 20}} />
                           <a href="/sign-in">Already registered? Login here</a>
                           
                        </div>
                        <div />
                        
                    </Grid>
                </Grid>

            </div>
           
        );
    }
    export default Signup