import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import imageForSiteThird from "../images/imageForSiteThird.jpg";
import AboutTitle from "./AboutTitle";
import AboutText from "./AboutText";
import AboutAllInformationLink from "./AboutAllInformationLink";

const useStyles = makeStyles({
  componentStyle: {
    backgroundImage: `url(${imageForSiteThird})`,
    flexGrow: 1,
    display: "flex",
    backgroundRepeat: "no-repeat",
    webkitBackgroundImage: `url(${imageForSiteThird})`,
    webkitFlexGrow: 1,
    webkitDisplay: "flex",
    webkitBackgroundRepeat: "no-repeat",
    mozBackgroundImage: `url(${imageForSiteThird})`,
    mozFlexGrow: 1,
    mozDisplay: "flex",
    mozBackgroundRepeat: "no-repeat",
    msBackgroundImage: `url(${imageForSiteThird})`,
    msFlexGrow: 1,
    msDisplay: "flex",
    msBackgroundRepeat: "no-repeat",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      minWidth: "320px",
      maxWidth: "480px",
      webkitMinWidth: "320px",
      webkitMaxWidth: "480px",
      mozMinWidth: "320px",
      mozMaxWidth: "480px",
      msMinWidth: "320px",
      msMaxWidth: "480px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      minWidth: "481px",
      maxWidth: "768px",
      webkitMinWidth: "320px",
      webkitMaxWidth: "480px",
      mozMinWidth: "320px",
      mozMaxWidth: "480px",
      msMinWidth: "320px",
      msMaxWidth: "480px",
    },
  },
  positionText: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    webkitJustifyContent: "center",
    webkitDisplay: "flex",
    webkitFlexDirection: "column",
    mozJustifyContent: "center",
    mozDisplay: "flex",
    mozFlexDirection: "column",
    msJustifyContent: "center",
    msDisplay: "flex",
    msFlexDirection: "column",
  },
  borderStyle: {
    border: "10px solid white",
    padding: "3%",
    width: "70%",
    display: "flex",
    height: "300px",
    margin: "70px",
    alignItems: "center",
    flexDirection: "column",
    webkitBorder: "10px solid white",
    webkitPadding: "3%",
    webkitWidth: "70%",
    webkitDisplay: "flex",
    webkitHeight: "300px",
    webkitMargin: "70px",
    webkitAlignItems: "center",
    webkitFlexDirection: "column",
    mozBorder: "10px solid white",
    mozPadding: "3%",
    mozWidth: "70%",
    mozDisplay: "flex",
    mozHeight: "300px",
    mozMargin: "70px",
    mozAlignItems: "center",
    mozFlexDirection: "column",
    msBorder: "10px solid white",
    msPadding: "3%",
    msWidth: "70%",
    msDisplay: "flex",
    msHeight: "300px",
    msMargin: "70px",
    msAlignItems: "center",
    msFlexDirection: "column",
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      margin: "70px 70px 70px 100px",
      webkitMargin: "70px 70px 70px 100px",
      mozMargin: "70px 70px 70px 100px",
      msMargin: "70px 70px 70px 100px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      margin: "70px 70px 70px 100px",
      webkitMargin: "70px 70px 70px 100px",
      mozMargin: "70px 70px 70px 100px",
      msMargin: "70px 70px 70px 100px",
    },
    "@media only screen and (min-width: 828px) and (max-width: 1024px)": {
      margin: "70px 70px 70px 130px",
      webkitMargin: "70px 70px 70px 130px",
      mozMargin: "70px 70px 70px 130px",
      msMargin: "70px 70px 70px 130px",
    },
    "@media only screen and (min-width: 1025px) and (max-width: 1440px)": {
      margin: "70px 70px 70px 170px",
      webkitMargin: "70px 70px 70px 170px",
      mozMargin: "70px 70px 70px 170px",
      msMargin: "70px 70px 70px 170px",
    },
    "@media only screen and (min-width: 1441px) and (max-width: 2560px)": {
      margin: "70px 70px 70px 220px",
      webkitMargin: "70px 70px 70px 220px",
      mozMargin: "70px 70px 70px 220px",
      msMargin: "70px 70px 70px 220px",
    },
  },
});

/* About раздел */

const AboutContainer = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.componentStyle}>
          <div className={classes.borderStyle}>
            <span className={classes.positionText}>
              <AboutTitle />
              <AboutText />
              <AboutAllInformationLink />
            </span>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AboutContainer;
