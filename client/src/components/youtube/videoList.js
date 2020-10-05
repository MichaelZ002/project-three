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
        <h3 style={{ textAlign: "center", fontWeight: "bold", marginTop: "20px" }}>Your Next Project Is Waiting...</h3>
        <Video data={data} vidSelected={vidSelected} />
      </div>
    </div>
  );
};


