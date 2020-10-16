import React, { useState, useEffect } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import API from "../../utils/API";
import VidPlayer from "../youtube/vidPlayer";
import DeleteBtn from "../DeleteBtn";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "../button"

export default (props) => {
  const [uHasData, setUHasData] = useState([])

  useEffect(() => {
    if (uHasData.length < 1 && props.user) {

      console.log("HI")
      console.log(props.user.uid)
      grabUserData(props.user.uid)
    }
  })

  function grabUserData(uid) {
    console.log("grabData UID" + uid)
    API.getUserData(uid)
      .then(res => {
        console.log("my data ", res.data)
        setUHasData(res.data)
      }
      )
      .catch(err => console.log(err));
  }

  function destroyUserData(favID) {
    API.deleteUserData(props.user.uid, favID)
      .then(res => grabUserData())
      .catch(err => console.log(err));
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "5vh",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>


          {uHasData.map(fav => {
            return (
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <div style={{display: "inline-flex"}}>
                    <VidPlayer videoId={fav.faveVids[0]} />
                    <Button> Create Project </Button>
                    <DeleteBtn onClick={() => destroyUserData(fav._id)} style={{marginTop: "0", marginLeft: "5vw"}} />
                  </div>
                  
                </Paper>
              </Grid>
            );
          })}

        </Grid>
      </div>
      <List>

      </List>


    </>
  )
}








