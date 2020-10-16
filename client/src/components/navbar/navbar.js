import {
    AppBar,
    Container,
    Hidden,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Toolbar,
    Fab
  } from "@material-ui/core";
  import { KeyboardArrowUp } from "@material-ui/icons";
  import * as React from "react";
  import HideOnScroll from "./hideOnScroll";
  import SideDrawer from "./sideDrawer";
  import BackToTop from "./backToTop";
  import Title from "../title";
  import {Link} from "react-router-dom"
  
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
      marginTop: "auto",
      marginBottom: "auto"
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
          <AppBar style={{paddingLeft: "0", marginLeft: "0", marginBottom: "50px"}} position="fixed" className={classes.appbarStyle}>
            <Toolbar style={{paddingLeft: "0", marginLeft: "0"}} component="nav">
              <Container className={classes.navbarDisplayFlex} style={{maxWidth: "100vw"}}>
                <Title />
                <Hidden smDown>
                  <List
                    component="nav"
                    aria-labelledby="main navigation"
                    className={classes.navListDisplayFlex}
                  >
                    {navLinks.map(({ title, path }) => (
                      <Link to={path} key={title} className={classes.linkText}>
                        <ListItem button className="activeNav" style={{marginTop: "auto", marginBottom: "auto"}}>
                          <ListItemText className="activeNav" primary={title} />
                        </ListItem>
                      </Link>
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
  