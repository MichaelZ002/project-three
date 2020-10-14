import React from "react";

const Videoplayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
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

  
