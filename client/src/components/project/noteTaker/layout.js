import React, { memo } from "react";
import { Typography } from "@material-ui/core";


const Layout = memo(props => (
    <>
        <div>
          <Typography 
          component="h1"
          variant="h5"
          style={{ color: "#000" }}
          ></Typography>
      
      {props.children}
      </div>
      </>
  ));
  
  export default Layout;
  