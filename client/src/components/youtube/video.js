import React, {useState, useEffect} from "react";
import "../../styles/_video.css";

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
  };
  return stylez;
}
function createVidTiles(vidInfo, vidSelected) {
  return vidInfo.map(({ snippet, id }, index) => {
    return (
      <div
        className="video"
        id="firstVid"
        key={index}
        onClick={() => grabVideo(id, vidSelected)}>
        <div style={vidStylez(snippet.thumbnails.high.url)} key={index} />
        <p className="title">{snippet.title}</p>
      </div>
    );
  });
}
const Video = ({ data, vidSelected }) => {
  return <>{createVidTiles(data, vidSelected)}</>;
};

export default Video;