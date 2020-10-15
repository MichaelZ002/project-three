import React, { useState, useEffect, useContext } from 'react';
import Navbar from "../navbar/navbar";
import API from "../../utils/API";
import FavList from './favList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import VidPlayer from "../youtube/vidPlayer";
import DeleteBtn from "../DeleteBtn";
import { UserContext } from '../../prov/UserProvider';


export default () => {
  const [uHasData, setUHasData] = useState([])
  const user = useContext (UserContext)

  return (
    <>
      <Navbar />
      <FavList user={user}/>
    </>
  )

}

