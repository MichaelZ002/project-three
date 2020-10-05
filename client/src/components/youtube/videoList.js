import React from "react";
import Video from "./video";

// {videos.map(() => {
//   <li>
//       <Video />
//   </li>
// })}
export default function VideoList({ data, vidSelected }) {
  return (
    <div className="vidList">
      <div style={{ padding: "20px 0" }}>
        <h3 style={{ textAlign: "center", fontWeight: "bold", marginTop: "20px" }}>Your Next Project Is Waiting Beneath the Fold...</h3>
        <hr style={{height: "3px", background: "linear-gradient(to right, #ee0979, #ff6a00)", borderRadius: "3px", width: "60vw", marginTop: "20px"}} />
        <Video data={data} vidSelected={vidSelected} />
      </div>
    </div>
  );
};


