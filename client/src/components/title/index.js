import React from "react";
import Typed from "react-typed";
import { Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"


export default () => {
  const titleStyle = {
    color: "white",
    background: 'linear-gradient(to left, #ee0979, #ff6a00)',
    fontWeight: 600,
    textShadow: "-1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000, -1px -1px 0 #000",
    fontSize: 50,
    borderRadius: "20px",
    padding: "15px"

  }
  return (
    <Link to="/home" style={{ display: "inline-flex", textDecoration: "none" }}>
      <FontAwesomeIcon style={titleStyle} icon={faTools} />
      <Typography component="h1" style={titleStyle} variant="h3"><Typed strings={["DIWHY", "DIWHY"]} typeSpeed={40} backSpeed={60} loop />
      </Typography>
    </Link>
  )
}