import React from "react";
import { Button, Grid, InputAdornment, TextField, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { AccountCircle, LockRounded , EmailRounded} from "@material-ui/icons";
import Image from "../../images/bg.jpg"
import Typed from "react-typed";



const useStyles = makeStyles(() => ({

    title: {
        color: "#EE0979"
    },
    subcontainerRight: {
        background: 'linear-gradient(to right bottom, #fff, #fff, #ffb84d)'

    },
    loginBackground: {
        justify: "center",
        minHeight: "30vh",
        padding: "50px"
    }
}))

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
                           <Typography component="h1" className={classes.title} variant="h3"><Typed strings={["DIWHY"]} typeSpeed={100} backSpeed={100} loop/>
                           </Typography>
                           </Grid>
                           <br />
                           <Grid container justify="center" >
                           <Typography component="h1" variant="h5" style={{color:"black"}} >Sign Up
                           </Typography>
                           </Grid>
                           <InputField 
                           label="First name" 
                           margin="normal" 
                           style={{ color: "tan" }}
                           variant="outlined"
                           InputProps={{ startAdornment: <InputAdornment position="start" ><AccountCircle /></InputAdornment>}}
                           
                           />
                           <InputField 
                           label="Last name" 
                           margin="normal" 
                           variant="outlined"
                           InputProps={{ startAdornment: <InputAdornment position="start" ><AccountCircle /></InputAdornment>}}
                           
                           />
                           <InputField 
                           label="Email" 
                           margin="normal"
                           variant="outlined" 
                           color="tan"
                           InputProps={{ startAdornment: <InputAdornment position="start" ><EmailRounded/></InputAdornment>}}
                           
                           />
                           <InputField 
                           type="password" 
                           label="Password" 
                           margin="normal" 
                           variant="outlined"
                           InputProps={{ startAdornment: <InputAdornment position="start" ><LockRounded /></InputAdornment>}}
                           
                           />
                           <div style={{ height: 20}} />
                           <Button color="primary" variant="contained" style={{ background: "linear-gradient(to left, #ee0979, #ff6a00)" }}>Sign Up</Button>
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