import React, { useState, useEffect } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import API from "../../utils/API";
import VidPlayer from "../youtube/vidPlayer";
import DeleteBtn from "../DeleteBtn";

export default (props) => {
    const [uHasData, setUHasData] = useState([])
    
    useEffect(() => {
        if(uHasData.length < 1 && props.user)
        {

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

    return (
        <>
          <List>
            {uHasData.map(fav => {
              return (
                <ListItem key={fav._id}>
                  <VidPlayer videoId={fav.faveVids[0]}/>
                  <DeleteBtn onClick={() => destroyUserData(fav._id)} />
                </ListItem>
              );
            })}
          </List>
        </>
      )
}