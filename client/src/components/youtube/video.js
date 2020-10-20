import React, { useContext, useState } from "react";
import "../../styles/_video.css";
import dayjs from "dayjs";
import VidPlayer from "../youtube/vidPlayer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { UserContext } from '../../prov/UserProvider';
import API from "../../utils/API";

const wordStylez = {
  position: "relative",
  marginTop: "auto",
  marginBottom: "auto",
  marginLeft: "25px"
};

const Video = ({ data, vidSelected }) => {
  const init = {
    0:'gray',
    1:'gray',
    2:'gray',
    3:'gray',
    4:'gray',
  }

  const [clicked, setClicked] = useState(init)
  const user = useContext(UserContext)
function createVidTiles(vidInfo, vidSelected, user) {
  

  const findFav = (id, videoId) => {
    axios.get('/api/savedfavs', {
      params: {
        UID: id,
        faveVids: [videoId]
      }
    })
      .then((res) => {
        console.log("res ", res)
        if (res.data.length > 0) {
          console.log("there is data! ", res.data);
        } else {
          console.log("there is NO data! ", res.data);
        }
        
      })
      .catch((err) => console.log(err));
  }

  const like = (snippet, id) => {
    axios({
      method: 'post',
      url: '/api/save-link',
      data: { snippet, id, uid: user.uid }

    }).then(res => {
      console.log("line 27 video.js console", res)

    }).catch(err => {
      console.log(err)
    })

  }

  const unLike = (vidID) => {
    // axios({
    //   method: 'delete',
    //   url: '/api/save-link',
    //   data: { _id: id }

    // }).then(res => {
    //   console.log("line 27 video.js console", res)

    // }).catch(err => {
    //   console.log(err)
    // })

  }



  
  if (vidInfo) {
    // randomizing videos 
    //copy this code over vidInfo on line 76 to randomize: vidInfo= vidInfo.sort(() => .5 - Math.random()).slice(0, 3)

    return vidInfo.map(({ snippet, id }, index) => {
      function clickable() {
        if (clicked[index] === "gray") {
          console.log(`uid ${user.uid}, vid ID ${id.videoId}`)
          findFav(user.uid, id.videoId)
          setClicked({...clicked, [index]:"red"})
          like(snippet, id.videoId)
        } 
        // code for future development: Toggle liked back to unlike
        // else {
        //   setClicked({...clicked, [index]:"gray"})
        //   unLike(user.uid, id.videoId)
        // }
      }
       

      return (
        <div style={{ display: "inline-flex", width: "80vw", maxWidth: "100vw" }} key={index}>

          <div className="video" id="firstVid" key={index}>
            <VidPlayer snippet={snippet.thumbnails.high.url} index={index} videoId={id.videoId} />
            <p className="title" style={{fontSize: "20px"}}>{snippet.channelTitle}</p>
          </div>


          <div className="videoInfo" style={wordStylez}>
            <button onClick={() => { clickable() }}>
              <FontAwesomeIcon icon={faHeart} style={{ color: clicked[index], fontSize: "25px", marginTop: "0" }} />
            </button>
            <h4 style={{ textDecoration: "bold" }}>{snippet.title}</h4>
            <p style={{ textDecoration: "italics" }}>{dayjs(snippet.publishTime).format("MMMM DD, YYYY")}</p>
            <p>
              {snippet.description}
              <a id="gradientAnchors" href={`https://www.youtube.com/watch?v=${id.videoId}`} style={{ marginLeft: "6px" }} target="blank">See more on Youtube</a>
            </p>
          </div>
        </div>
      );
    });
  }
}
  

return <>{createVidTiles(data, vidSelected, user)}</>;

};

export default Video;