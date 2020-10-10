import React, { useState, useEffect } from "react";
import Search from "../youtube/search";
import API from "../../utils/youtube-api"
import VideoList from "../youtube/videoList";
import Slider from "../slider"
import Navbar from "../navbar/navbar"
import VidPlayer from "../youtube/vidPlayer";
import { STATES } from "mongoose";


export default (props) => {
  const [videoState, setVideoState] = useState({
    vidMetaData: [],
    vidID: null
  })
  function idGrabbr(itemsArr){
    let allIDs = []
    for(let i=0; i< itemsArr.length; i++) {
      allIDs.push(itemsArr[i].id.videoId)
    }
    return allIDs
  }

  const onSearch = async searchWord => {
    const response = await API.get("/search", {
      params: {
        q: searchWord + " diy",
        kind: "youtube#video"
      }
    })
    
    setVideoState({
      vidMetaData: response.data.items,
      vidID: response.data.items[0].id.videoId
    })
    console.log("RESPONSE " + typeof(response.data.items))
    scrollToVids()
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

  function fave() {
      
    console.log(fave)
  }

  return (
    <>
      <div style={{ display: "inline-flex" }}>
        <Navbar />
      </div>
      <div style={{ marginLeft: "25px", marginTop: "70px"}}>
        <h3 style={{ fontWeight: "bold", marginLeft: "10vw" }}>Whatever your interests, DIWHY not start a new project?</h3>
        <Slider />
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "45px", marginBottom: "35px"}}><Search onSearch={onSearch} /></div>
          <div id="myVidList" className="col-md-12">
          <button id = "fave" onclick="fave()" class = "buttonSm"> Favorite </button>
            <VideoList vidSelected={vidSelected} data={videoState.vidMetaData} /> 
            
          </div>
        </div>
      </div>
    </>
  )
}