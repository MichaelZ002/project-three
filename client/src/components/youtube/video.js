import React, { useContext, useState, useEffect } from "react";
import "../../styles/_video.css";
import dayjs from "dayjs"
import VidPlayer from "../youtube/vidPlayer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"
import { UserContext } from '../../prov/UserProvider'

const wordStylez = {
  position: "relative",
  marginTop: "auto",
  marginBottom: "auto",
  marginLeft: "25px"
};

function createVidTiles(vidInfo, vidSelected, user) {

  const like = (snippet, id) => {  
    axios({
      method: 'post',
      url: '/api/save-link',
      data: {snippet, id, uid: user.uid}

    }).then(res =>{ 
      console.log("line 27 video.js console", res)

    }).catch(err => {
      console.log(err)
    })
    
  }
  

  const unLike = (id) => {  
    axios({
      method: 'delete',
      url: '/api/save-link',
      _id: {id}

    }).then(res =>{ 
      console.log("line 27 video.js console", res)

    }).catch(err => {
      console.log(err)
    })
    
  }

  if (vidInfo) {
  return vidInfo.map(({ snippet, id }, index) => {
    const [clicked, setClicked] = useState("gray")
    
// changes liked button's color if liked or not and send to
//  or delete from database 
// add code to check if a video is already in the database on like
    function clickable() {
      
      if(clicked === "gray") {
        setClicked("red")
        like(snippet, id.videoId)
      } else {
        setClicked("gray")
        unLike(id.videoId)
      }
      
    }

   
    return (
      <div style={{display: "inline-flex", width: "80vw", maxWidth:"100vw"}} key={index}>
        
          <div className="video" id="firstVid" key={index}>
            <VidPlayer snippet={snippet.thumbnails.high.url} index={index} videoId={id.videoId}/>
            <p className="title">{snippet.title}</p>
          </div>
        
        
        <div className="videoInfo" style={wordStylez}>
          <div>{}</div>
          <button onClick = {() => {clickable()}}>
        <FontAwesomeIcon  icon={faHeart} style={{color: clicked, fontSize: "25px", marginTop: "0"}}/>
        </button>
          <h4 style={{textDecoration: "bold"}}>{snippet.channelTitle}</h4>
          <p style={{textDecoration: "italics"}}>{dayjs(snippet.publishTime).format("MMMM DD, YYYY")}</p>  
          <p>
            {snippet.description} 
            <a id="gradientAnchors" href={`https://www.youtube.com/watch?v=${id.videoId}`} style={{marginLeft:"6px"}} target="blank">See more on Youtube</a>
          </p>  
        </div>
      </div>
    );
  });
}}
const Video = ({ data, vidSelected}) => {

  const user = useContext (UserContext)
  console.log(user)

  return <>{createVidTiles(data, vidSelected, user)}</>;

};

export default Video;