import {
    AppBar,
    Container,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Toolbar,
    Fab
  } from "@material-ui/core";
  import { Home, KeyboardArrowUp } from "@material-ui/icons";
  import * as React from "react";
  import HideOnScroll from "./hideOnScroll";
  import SideDrawer from "./sideDrawer";
  import BackToTop from "./backToTop";
  
  const useStyles = makeStyles({
    
    appbarStyle: {
        background: "linear-gradient(to left, #EE0979, #FF6A00)"

    },

    navbarDisplayFlex: {
      display: "flex",
      justifyContent: "space-between"
    },
    navListDisplayFlex: {
      display: "flex",
      justifyContent: "space-between"
    },
    linkText: {
      textDecoration: "none",
      textTransform: "uppercase",
      color: "white",
    }
  });
  
  const navLinks = [
    { title: "Favorites", path: "/favorite" },
    { title: "My Projects", path: "/project" },
    { title: "Log Out", path: "/sign-in" }
  ];

  const Header = () => {
    const classes = useStyles();
  
    return (
      <>
        <HideOnScroll>
          <AppBar position="fixed" className={classes.appbarStyle}>
            <Toolbar component="nav">
              <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                <IconButton edge="start" aria-label="home">
                  <a href="/home" style={{ color: 'white' }}>
                    <Home fontSize="large" />
                  </a>
                </IconButton>
  
                <Hidden smDown>
                  <List
                    component="nav"
                    aria-labelledby="main navigation"
                    className={classes.navListDisplayFlex}
                  >
                    {navLinks.map(({ title, path }) => (
                      <a href={path} key={title} className={classes.linkText}>
                        <ListItem button>
                          <ListItemText primary={title} />
                        </ListItem>
                      </a>
                    ))}
                  </List>
                </Hidden>
                <Hidden mdUp>
                  <SideDrawer navLinks={navLinks} />
                </Hidden>
              </Container>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor" />
  
        <BackToTop>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </BackToTop>
      </>
    );
  };
  
  export default Header;
  