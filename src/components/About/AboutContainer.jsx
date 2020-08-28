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
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      width: "400px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      width: "750px",
    },
  },
  positionText: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
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
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      margin: "70px 70px 70px 100px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      margin: "70px 70px 70px 100px",
    },
    "@media only screen and (min-width: 828px) and (max-width: 1024px)": {
      margin: "70px 70px 70px 130px",
    },
    "@media only screen and (min-width: 1025px) and (max-width: 1440px)": {
      margin: "70px 70px 70px 170px",
    },
    "@media only screen and (min-width: 1441px) and (max-width: 2560px)": {
      margin: "70px 70px 70px 220px",
    },
  },
});
{
  /* About раздел */
}
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
