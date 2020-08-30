import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
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
    webkitColor: "grey",
    webkitTextTransform: "uppercase",
    webkitDisplay: "flex",
    webkitMargin: "10px",
    webkitAlignItems: "center",
    mozColor: "grey",
    mozTextTransform: "uppercase",
    mozDisplay: "flex",
    mozMargin: "10px",
    mozAlignItems: "center",
    msColor: "grey",
    msTextTransform: "uppercase",
    msDisplay: "flex",
    msMargin: "10px",
    msAlignItems: "center",

    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
      webkitFlexGrow: 1,
      mozFlexGrow: 1,
      msFlexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    webkitDisplay: "flex",
    webkitJustifyContent: "center",
    webkitFlexDirection: "row",
    mozDisplay: "flex",
    mozJustifyContent: "center",
    mozFlexDirection: "row",
    msDisplay: "flex",
    msJustifyContent: "center",
    msFlexDirection: "row",
  },
}));

/* Большое меню в шапке */

const BigMenu = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <div className={classes.headerOptions}>
      <div>
        <Typography
          className={classes.textStyle}
          onClick={() => handleButtonClick("/about")}
        >
          <About />
        </Typography>
      </div>
      <div>
        <Typography
          onClick={() => handleButtonClick("/projects")}
          className={classes.textStyle}
        >
          <Projects />
        </Typography>
      </div>
      <div>
        <Typography
          className={classes.textStyle}
          onClick={() => handleButtonClick("/gallery")}
        >
          <Gallery />
        </Typography>
      </div>
      <div>
        <Typography
          className={classes.textStyle}
          onClick={() => handleButtonClick("/houses")}
        >
          <Houses />
        </Typography>
      </div>
      <div>
        <Typography
          className={classes.textStyle}
          onClick={() => handleButtonClick("#")}
        >
          <GeneralPlan />
        </Typography>
      </div>
      <div>
        <Typography
          className={classes.textStyle}
          onClick={() => handleButtonClick("#")}
        >
          <Location />
        </Typography>
      </div>
    </div>
  );
};

export default withRouter(BigMenu);
