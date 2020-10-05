import React, { useState, useEffect } from "react";
import { Button, TextField, } from "@material-ui/core";

import MUIButton from "../button";



export default (props) => {
  const [state, setState] = useState({ title: "" })

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(state.title)
  }
  // useEffect(() => {
  //   handleSubmit()
  // }, [""]);

  // update the state with every character the user types in the search
  const searchtoState = (e) => {
    const searchWords = e.target.value
    console.log(searchWords)
    setState({ title: searchWords })
  }

  // const scrollToVids = async (e) => {
    
  //   const elmnt = await document.getElementById("firstVideo");
    
  //   elmnt.scrollIntoView();
    
    
  // }

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className="searchForm">
          <TextField label="Search" color="secondary" value={state.title} onChange={searchtoState} id="videoSearch" type="text" placeholder="What are your interests?" />
          <MUIButton onClick={handleSubmit}>Submit</MUIButton>
        </div>
      </form>
    </div>
  )
}