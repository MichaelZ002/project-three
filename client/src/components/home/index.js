import React, { useState, useEffect } from "react";
import Search from "../youtube/search";
import API from "../../utils/youtube-api"
import VideoList from "../youtube/videoList";
import Slider from "../slider"
import Navbar from "../navbar"
import { STATES } from "mongoose";


export default (props) => {
  const [videoState, setVideoState] = useState({
    vidMetaData: [],
    vidID: null
  })

  const onSearch = async searchWord => {
    const response = await API.get("/search", {
      params: {
        q: searchWord + " diy",
        kind: "youtube#video"
      }
    })
    scrollToVids()
    setVideoState({
      vidMetaData: response.data.items,
      vidID: response.data.items[0].id.videoId
    })
    console.log(response.data.items)
  }

  const vidSelected = videoId => {
    setVideoState({
      vidID: videoId
    })
  }

  function scrollToVids() {
    const elmnt = document.getElementById("myVidList");
    elmnt.scrollIntoView();
  }

  return (
    <>
      <div style={{ display: "inline-flex" }}>
        <Navbar style={{ marginRight: "25px" }} />
      </div>
      <div style={{ marginLeft: "25px" }}>
        <h3 style={{ fontWeight: "bold", marginLeft: "10vw" }}>Whatever your interests, DIWHY not start a new project?</h3>
        <Slider />
        <div className="row">
          <div className="col-md-12"><Search onSearch={onSearch} /></div>
          <div id="myVidList" className="col-md-12">
            <VideoList vidSelected={vidSelected} data={videoState.vidMetaData} /> 
          </div>
        </div>
      </div>
    </>
  )
}