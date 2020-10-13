import React, {useState, useEffect} from "react";
import "../../styles/_video.css";
import dayjs from "dayjs"
import { Gradient } from 'react-gradient';
import VidPlayer from "../youtube/vidPlayer";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { red } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";


// function grabVideo(vidIdObj, vidSelected) {
//   vidSelected(vidIdObj.videoId);
// }
// onClick={() => grabVideo(id, vidSelected)} (put this inside the video div)
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

function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative"
  };
  return _styles;
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
    
    const writeToDB = () => {
      let vidURL = `https://www.youtube.com/watch?v=${id.videoId}`
      
      console.log(vidURL)
    
    }
    const [isOpen, setOpen] = useState(false)
    return (
      <div style={{display: "inline-flex", width: "80vw", maxWidth:"100vw"}} key={index}>
        
          <div className="video" id="firstVid" key={index} /* onclick here  */ >
            <VidPlayer snippet={snippet.thumbnails.high.url} index={index} videoId={id.videoId}/>
            <p className="title">{snippet.title}</p>
          </div>
        
        
        <div className="videoInfo" style={wordStylez}>
          <button onClick={writeToDB} >
        <FontAwesomeIcon  icon={faHeart} style={{color: "red", fontSize: "25px", marginTop: "0"}}/>
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
const Video = ({ data, vidSelected }) => {
  console.log("MY DATA " + data)
  return <>{createVidTiles(data, vidSelected)}</>;
};

export default Video;