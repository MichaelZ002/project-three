import React, {useState, useEffect} from "react";
import "../../styles/_video.css";
import dayjs from "dayjs"
import { Gradient } from 'react-gradient';
import VidPlayer from "../youtube/vidPlayer";
import {Link} from "react-router-dom"

function grabVideo(vidIdObj, vidSelected) {
  vidSelected(vidIdObj.videoId);
}
function vidStylez(imageurl) {
  const stylez = {
    position: "relative",
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    width: "inherit"
  };

  return stylez;
}

  const wordStylez = {
    position: "relative",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "25px"
  };

  let myColors = [
    'ee0979',
    'ff6a00'
]
// let myColors = Gradient('#ee0979', '#ff6a00', 20).toArray('rgbString');



function createVidTiles(vidInfo, vidSelected) {
  console.log("my vidInfo " + vidInfo)
  if (vidInfo) {
  return vidInfo.map(({ snippet, id }, index) => {
    return (
      <div style={{display: "inline-flex", width: "80vw"}}>
        
          <div className="video" id="firstVid" key={index} onClick={() => grabVideo(id, vidSelected)}>
            
            <VidPlayer videoId={id.videoId}/>
            <p className="title">{snippet.title}</p>
          </div>
        
        
        <div className="videoInfo" style={wordStylez}>
          <h4 style={{textDecoration: "bold"}}>{snippet.channelTitle}</h4>
          <p style={{textDecoration: "italics"}}>{dayjs(snippet.publishTime).format("MMMM DD, YYYY")}</p>  
          <p>
            {snippet.description} 
            <Link id="gradientAnchors" to={`https://www.youtube.com/watch?v=${id.videoId}`} style={{marginLeft:"6px"}} target="blank">See more on Youtube</Link>
          </p>  
        </div>

        
      </div>
    );
  });
}}
const Video = ({ data, vidSelected }) => {
  console.log("MY DATA " + data)
  return <>{createVidTiles(data, vidSelected)}</>;
};

export default Video;