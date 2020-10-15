import React from "react";

const Videoplayer = ({ videoId }) => {
  console.log("anything")
  if (!videoId) {
    return (
      <></>
    );
  }
  return (
    <div className="video-player">
       <iframe
        title= {`${ videoId }`}
        width="inherit" 
        height="180px" 
        src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen="allowfullscreen">
       </iframe>
    </div>
  );
};

export default Videoplayer;

  
