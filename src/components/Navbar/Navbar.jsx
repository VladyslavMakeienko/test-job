import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import BigMenu from "./BigMenu";
import MobMenu from "./MobMenu";

const useStyles = makeStyles((theme) => ({
  styleAppBar: {
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    margin: "0, 100px, 0, 100px",
    webkitDisplay: "flex",
    webkitBackgroundColor: "#fff",
    webkitFlexDirection: "row",
    webkitJustifyContent: "center",
    webkitMargin: "0, 100px, 0, 100px",
    mozDisplay: "flex",
    mozBackgroundColor: "#fff",
    mozFlexDirection: "row",
    mozJustifyContent: "center",
    mozMargin: "0, 100px, 0, 100px",
    msDisplay: "flex",
    msBackgroundColor: "#fff",
    msFlexDirection: "row",
    msJustifyContent: "center",
    msMargin: "0, 100px, 0, 100px",
  },
}));

/* Навигационное меню */

const Navbar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <AppBar position="static">
      <Toolbar className={classes.styleAppBar}>
        {isMobile ? <MobMenu /> : <BigMenu />}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
