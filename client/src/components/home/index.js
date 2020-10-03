import React, {useState, useEffect} from "react";
import Search from "../youtube/search";
import API from "../../utils/youtube-api"

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
        q: keyword + " diy"
      }
    })
    console.log(response)
  }
  return (
    <>
      <Search onSearch={onSearch} />
    </>
  )
}