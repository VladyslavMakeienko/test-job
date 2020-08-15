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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "flex",
    flexGrow: 1,
    color: "grey",
    flexDirection: "row",
    margin: "0, 100px, 0, 100px",
    alignItems: "flex-start",
    justifyContent: "space-around",
    textTransform: "uppercase",
  },
  styleBackground: {
    backgroundColor: "#ffffff",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.styleBackground}>
          <Typography variant="h6" className={classes.title}>
            <About />
            <Projects />
            <Gallery />
            <Houses />
            <GeneralPlan />
            <Location />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
