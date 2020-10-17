import React, { useContext } from 'react';
import Navbar from "../navbar/navbar";
import FavList from './favList';
import { UserContext } from '../../prov/UserProvider';


export default () => {
  const user = useContext (UserContext)

  return (
    <>
      <Navbar />
      <FavList user={user}/>
    </>
  )

}

