import React, {useState, useEffect} from "react";
import Search from "../youtube/search";
import API from "../../utils/youtube-api"
import VideoList from "../youtube/videoList";
import { STATES } from "mongoose";

export default (props) => {
  const [videoState, setVideoState] = useState({
    vidMetaData:[],
    vidID: null
  })

  useEffect(() => {
    onSearch()
  }, [])

  const onSearch = async keyword => {
    const response = await API.get("/search", {
      params: {
        q: keyword, 
        kind: "youtube#video"
      }
    })
      .then(res => 
        setVideoState({
          vidMetaData:res.data.items,
          vidID: res.data.items[0].id.videoId
        })
      )
      .catch(err => console.log(err));
      
  }

  const vidSelected = videoId => {
    setVideoState({
      vidID: videoId
    })
  }
  return (
    <>
      <div className="row"></div>
      <div className="col-md-12"><Search onSearch={onSearch} /></div>
      <div className="col-md-12"><VideoList vidSelected={vidSelected}  data={videoState.vidMetaData} /></div>
      
      
    </>
  )
}