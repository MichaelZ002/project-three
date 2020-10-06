import React, { useState, useEffect } from "react";
import Search from "../youtube/search";
import API from "../../utils/youtube-api"
import Navbar from "../navbar/navbar";
import banner from "../../images/bg.jpg";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core/";

export default (props) => {
  const [videoState, setVideoState] = useState({
    vidMetaData: [],
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
      <Navbar />
      <Grid container justify="center"style={{backgroundColor: "#fff7e6"}} >
        <Card >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="banner-image"
              height="200"
              image={banner}
            >
            </CardMedia>
          </CardActionArea>
        </Card>
        <Search onSearch={onSearch} />
      </Grid>
    </>
  )
}