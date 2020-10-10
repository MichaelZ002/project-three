import React, {  useState, forwardRef } from 'react';
import {List, ListItem, Button, Drawer } from '@material-ui/core';
import clsx from 'clsx';
import sidebarItems from './sidebarItems';
import { NavLink as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    
    root: {
      "& .MuiDrawer-paperAnchorDockedLeft" : {
        borderRight: "1px solid red"
        
      },
      justifyContent : "left",
    },
    drawer : {
      paddingTop : "20px",
      width: "15%",
      marginTop:"100px",
      borderWidth: "2px",
      borderColor: "#f50057 !important"
    },
    
    item: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0,
    },
    button: {
      padding: '10px 8px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%',
    },
    btnRoot : {
      justifyContent : "center",
      fontWeight: "bold",
      color:"black"
    },
  }));

const SideBar = (props) => {
    const [ menu, setMenu ] = useState({});
    const { className, ...rest } = props;
    const classes  = useStyles();
    const handleClick = (item) => {
        let newData = {...menu, [item] : !menu[item]};
        setMenu(newData);
    }
    const CustomRouterLink = forwardRef((props, ref) => (
      <div ref={ref} style={{ flexGrow: 1 }}>
        <RouterLink {...props} />
      </div>
    ));
    const handleMenu = ( children, level=0 ) => {
        return children.map(({children, name, url, links }) => {
            if ( !children ) {
              return (
                <List component="div" disablePadding key={ name }>
                  <ListItem
                    className={classes.item}
                    disableGutters
                    style={{padding:"0px"}}
                    key={name}
                  >
                    <Button
                      className={clsx({
                        [classes.btnRoot] : true,
                        [classes.button] : true,
                        [classes.subMenu] : level
                      })}
                      component={CustomRouterLink}
                      to={url}
                    >
                      {name}
                    </Button>
                  </ListItem>
                </List>
              )
            }
            return (
              <div key={ name }>
              <ListItem
                className={classes.item}
                disableGutters
                key={name}
                onClick={() => handleClick(name)}
              >
                <Button
                className={clsx({
                  [classes.btnRoot] : true,
                  [classes.button] : true,
                })}>
                  </Button>
                </ListItem>
              </div>
            )
        })
    }
return (
      <Drawer
          anchor="left"
          classes={{ paper: classes.drawer }}
          open={true}
          variant="persistent"
        >
          <List {...rest} className={clsx(classes.root, className)} >
              { handleMenu(sidebarItems.data) }
          </List>
      </Drawer>
    
   )
}
export default SideBar;





