import React, { useState, useEffect } from "react";
import Search from "../youtube/search";
import API from "../../utils/youtube-api";
import VideoList from "../youtube/videoList";
import Slider from "../slider"
import Navbar from "../navbar/navbar"
import Modal from "../modal"
import { STATES } from "mongoose";
const Fave = require("../Model");
const mongoose = require("mongoose");


export default (props) => {
  const [videoState, setVideoState] = useState({
    vidID: null
  })

  const [textState, setTextState] = useState({
    searchText: "Your Next Project Is Waiting Beneath the Fold..."
  })

  const onSearch = async (searchWord) => {
    const response = await API.get("/search", {
      params: {
        q: searchWord + " diy",
        kind: "youtube#video"
      }
    })

    if (!response.data.items[0]) {
      setTextState({
        searchText: "Sorry, there are no videos for your search."
      })
    } else {
      setTextState({
        searchText: "Your Next Project Is Waiting Beneath the Fold..."
      })
      setVideoState({
        vidMetaData: response.data.items,
        vidID: response.data.items[0].id.videoId
      })
      scrollToVids()
    }
    console.log("my response " + response)
  }

  const vidSelected = (videoId) => {
    setVideoState({
      vidID: videoId,
    });
    console.log(videoId)
  };

  function scrollToVids() {
    const elmnt = document.getElementById("myVidList");
    elmnt.scrollIntoView();
  }


  return (
    <>
      <div style={{ display: "inline-flex" }}>
        <Navbar />
      </div>
      <div style={{ marginLeft: "25px", marginTop: "70px" }}>
        <h3 style={{ fontWeight: "bold", marginLeft: "10vw" }}>
          Whatever your interests, DIWHY not start a new project?
        </h3>
        <Slider />
        <div className="row">
          <div
            className="col-md-12"
            style={{ marginTop: "45px", marginBottom: "35px" }}
          >
            <Search onSearch={onSearch} />
          </div>
          <div id="myVidList" className="col-md-12">
            
            <VideoList
              vidSelected={vidSelected}
              data={videoState.vidMetaData}
            />
          </div>
        </div>
      </div>
    </>
  );
};
