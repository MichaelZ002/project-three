import React from "react";
import Video from "./video";

// {videos.map(() => {
//   <li>
//       <Video />
//   </li>
// })}
export default function VideoList({ data, vidSelected }) {
  return (
    <div className="video-list">
      <div style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Videos List
        </h3>
        <Video data={data} vidSelected={vidSelected} />
      </div>
    </div>
  );
};


