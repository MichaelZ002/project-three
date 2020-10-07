import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  import { Menu } from "@material-ui/icons";
  import React from "react";
  import { useState } from "react";
  
  const useStyles = makeStyles({
    list: {
      width: 250,
      background: 'linear-gradient(to right bottom, #ffc107, #8c8c8c)',
      height: "100%"
    },
    linkText: {
      textDecoration: "none",
      textTransform: "uppercase",
      color: "white"
    }

  });
  
  const SideDrawer = ({ navLinks }) => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false });
  
    const toggleDrawer = (anchor, open) => event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ [anchor]: open });
    };
  
    const sideDrawerList = anchor => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List component="nav">
          {navLinks.map(({ title, path }) => (
            <a href={path} key={title} className={classes.linkText}>
              <ListItem button>
                <ListItemText primary={title} />
              </ListItem>
            </a>
          ))}
        </List>
      </div>
    );
  
    return (
      <React.Fragment>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer("right", true)}
        >
          <Menu fontSize="large" style={{ color: "white" }} />
        </IconButton>
  
        <Drawer
          anchor="right"
          open={state.right} 
          onOpen={toggleDrawer("right", true)}
          onClose={toggleDrawer("right", false)}
        >
          {sideDrawerList("right")}
        </Drawer>
      </React.Fragment>
    );
  };
  
  export default SideDrawer;
  