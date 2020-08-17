import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Gallery from "../Gallery/Gallery";
import GeneralPlan from "../GeneralPlan/GeneralPlan";
import Houses from "../Houses/Houses";
import Location from "../Location/Location";

// const useStyles = makeStyles(() => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//
//     flexGrow: 1,
//     color: "grey",
//
//
//
//
//
//   },
//   styleBackground: {
//     backgroundColor: "#ffffff",

//     width: "100%",
//   },
// }));

const useStyles = makeStyles(() => ({
  styleAppBar: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "0, 100px, 0, 100px",
  },
  textStyle: {
    color: "grey",
    textTransform: "uppercase",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.styleAppBar}>
        <Typography className={classes.textStyle}>
          <About />
          <Projects />
          <Gallery />
          <Houses />
          <GeneralPlan />
          <Location />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

{
  /* <AppBar position="static" >
        <Toolbar className={classes.styleBackground} >
          <Typography variant="h6" className={classes.title}>
            <About />
            <Projects />
            <Gallery />
            <Houses />
            <GeneralPlan />
            <Location />
          </Typography>
        </Toolbar>
      </AppBar> */
}
