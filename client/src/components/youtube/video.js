import React, {useState, useEffect} from "react";
import API from "../../utils/youtube-api"


export default () => {
  const [videoState, setVideoState] = useState({
    vidMetaData:[],
    vidID: null
  })

  useEffect(() => {
    onSearch()
  }, [])

  function onSearch() {
    API.getVideos()
      .then(res => 
        setVideoState(res.data)
      )
      .catch(err => console.log(err));
  }

  return (
    <div>
        
    </div>
  )
}