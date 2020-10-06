import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Component copied from Material UI website documentation.
const styles = {
  root: {
    marginLeft: "10px",
    background: 'linear-gradient(to left, #ee0979, #ff6a00)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    fontWeight: "bold",
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button onClick={props} className={clsx(classes.root, className)} {...other}>
      {children || 'Submit'}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
