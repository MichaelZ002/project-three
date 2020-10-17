import React, { useState } from "react";
import Search from "../youtube/search";
import API from "../../utils/youtube-api";
import VideoList from "../youtube/videoList";
import Slider from "../slider"
import Navbar from "../navbar/navbar"


export default (props) => {
  const [videoState, setVideoState] = useState({
    vidID: null
  })

  const [textState, setTextState] = useState({
    searchText: "Your Next Project Is Waiting Beneath the Fold..."
  })

  // randomizer
  function videoRandomizer() {
    let randomNum = Math.floor(Math.random() * (10 - 3) + 3);
    console.log(randomNum)
    return 
  }

    

  const onSearch = async (searchWord) => {
    let randomNum = Math.floor(Math.random() *  (10 - 3) + 3);
    console.log(randomNum)
    const response = await API.get("/search", {
      params: {
        q: searchWord + " diy",
        type: "video",
        maxResults: 10,
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
              mySearchText={textState.searchText}
            />
          </div>
        </div>
      </div>
    </>
  );
};
