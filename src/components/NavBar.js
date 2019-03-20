import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  IconButton
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import PropTypes from "prop-types";
import { blueGrey, orange } from "@material-ui/core/colors";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const primary = blueGrey[900];
const navbarColor = orange[900];
const styles = {
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  }
};
function NavBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="static" style={{ background: "black" }}>
        <Toolbar>
          <IconButton>
            <StarIcon style={{ color: "Red" }} />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Weather
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
