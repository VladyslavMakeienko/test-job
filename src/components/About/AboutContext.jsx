import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Paper } from "@material-ui/core";
import imageForSiteThird from "../images/imageForSiteThird.jpg";

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
  newsText: {
    textTransform: "uppercase",
    paddingTop: "10%",
    justifyContent: "center",
    color: "#fff",
    display: "flex",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      fontSize: "25px",
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
  textStyle: {
    justifyContent: "center",
    padding: "10px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  linkStyle: {
    color: "#fff",
  },
  linkText: {
    border: "1px solid white",
    borderRadius: "80px",
    width: "140px",
    textTransform: "uppercase",
    padding: "7px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0  35% 0 35%",
    alignItems: "center",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      margin: "0 20% 0 20%",
    },
  },
});

const AboutContext = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.componentStyle}>
          <Box component="div" className={classes.borderStyle}>
            <Box component="span" className={classes.positionText}>
              <Typography variant="h3" className={classes.newsText}>
                About
              </Typography>
              <Box component="div" className={classes.textStyle}>
                <Typography variant="p" className={classes.textStyle}>
                  New summer resort ... "It does not happen!" - You say - "Or is{" "}
                </Typography>
              </Box>
              <Link
                href="#"
                onClick={preventDefault}
                className={classes.linkStyle}
                underline="none"
              >
                <Box component="div" className={classes.linkText}>
                  All Information
                </Box>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AboutContext;
