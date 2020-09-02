import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Gallery from "../Gallery/Gallery";
import GeneralPlan from "../GeneralPlan/GeneralPlan";
import Houses from "../Houses/Houses";
import Location from "../Location/Location";

const useStyles = makeStyles((theme) => ({
  textStyle: {
    color: "grey",
    textTransform: "uppercase",
    display: "flex",
    margin: "10px",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
}));

/* Большое меню в шапке */

const BigMenu = (props) => {
  const { history } = props;
  const classes = useStyles();
  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div className={classes.headerOptions}>
      <div
        className={classes.textStyle}
        onClick={() => handleButtonClick("/about")}
      >
        <About />
      </div>
      <div
        onClick={() => handleButtonClick("/projects")}
        className={classes.textStyle}
      >
        <Projects />
      </div>
      <div
        className={classes.textStyle}
        onClick={() => handleButtonClick("/gallery")}
      >
        <Gallery />
      </div>
      <div
        className={classes.textStyle}
        onClick={() => handleButtonClick("/houses")}
      >
        <Houses />
      </div>
      <div className={classes.textStyle} onClick={() => handleButtonClick("#")}>
        <GeneralPlan />
      </div>
      <div className={classes.textStyle} onClick={() => handleButtonClick("#")}>
        <Location />
      </div>
    </div>
  );
};

export default withRouter(BigMenu);
