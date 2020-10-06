import React, {useState, useEffect} from "react";
import "../../styles/_video.css";
import dayjs from "dayjs"
import { Gradient } from 'react-gradient';
import VidPlayer from "../youtube/vidPlayer"

function grabVideo(vidIdObj, vidSelected) {
  console.log(vidIdObj)
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
  return vidInfo.map(({ snippet, id }, index) => {
    return (
      <div style={{display: "inline-flex", width: "80vw"}}>
        <div className="video" id="firstVid" key={index} onClick={() => grabVideo(id, vidSelected)}>
          <div style={vidStylez(snippet.thumbnails.high.url)} key={index}></div>
          
          <p className="title">{snippet.title}</p>
        </div>

        <div className="videoInfo" style={wordStylez}>
          <h4 style={{textDecoration: "bold"}}>{snippet.channelTitle}</h4>
          <p style={{textDecoration: "italics"}}>{dayjs(snippet.publishTime).format("MMMM DD, YYYY")}</p>  
          <p>
            {snippet.description} 
            <a id="gradientAnchors" href={`https://www.youtube.com/watch?v=${id.videoId}`} target="blank">Read more</a>
          </p>  
        </div>
      </div>
    );
  });
}
const Video = ({ data, vidSelected }) => {
  return <>{createVidTiles(data, vidSelected)}</>;
};

export default Video;