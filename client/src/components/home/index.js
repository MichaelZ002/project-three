import React, {useState, useEffect} from "react";
import Search from "../youtube/search";
import API from "../../utils/youtube-api"
import VideoList from "../youtube/videoList";
import Typed from "react-typed";
import {Typography} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faTools } from '@fortawesome/free-solid-svg-icons';
import Slider from "../slider"
import { STATES } from "mongoose";

export default (props) => {
  const [videoState, setVideoState] = useState({
    vidMetaData:[],
    vidID: null
  })

  const onSearch = async searchWord => {
    const response = await API.get("/search", {
      params: {
        q: searchWord + " diy", 
        kind: "youtube#video"
      }
    })
    setVideoState({
      vidMetaData:response.data.items,
      vidID: response.data.items[0].id.videoId
    })
  }

  const vidSelected = videoId => {
    setVideoState({
      vidID: videoId
    })
  }

  const titleStyle = {
    color: "white",
    background: 'linear-gradient(to left, #ee0979, #ff6a00)',
    fontWeight: 600,
    textShadow: "-1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000, -1px -1px 0 #000",
    marginBottom: "10px",
    fontSize: 50,
    margin: "10px",
    borderRadius: "20px",
    padding: "15px"

  }
  return (
    <div style={{marginLeft: "25px"}}>
      <div style={{display: "inline-flex"}}>
        <FontAwesomeIcon style={titleStyle} icon={faTools} /> 
        <Typography component = "h1" style={titleStyle} variant="h3"><Typed strings={["DIWHY", "DIWHY"]} typeSpeed={40} backSpeed={60} loop/>
        </Typography>
      </div>
      <h3 style={{fontWeight: "bold", marginLeft: "10vw"}}>Whatever your interests, DIWHY not start a new project?</h3>
      <Slider />
      <div className="row">
        <div className="col-md-12"><Search onSearch={onSearch} /></div>
        <div className="col-md-12"><VideoList vidSelected={vidSelected}  data={videoState.vidMetaData} /></div>
      </div>
      
    </div>
  )
}