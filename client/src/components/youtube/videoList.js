import React from "react";
import Video from "./video";


export default () => {
  return (
    <div>
      <ul>
        {videos.map(() => {
          <li>
              <Video />
          </li>
        })}
      </ul>
    </div>
  )
}