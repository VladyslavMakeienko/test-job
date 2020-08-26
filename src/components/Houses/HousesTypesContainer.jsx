import React from "react";
import HousesTypes from "./HousesTypes";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    height: "400px",
    justifyContent: "center",
  },
  positionText: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "400px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "700px",
    },
  },
  housesTypesText: {
    textTransform: "uppercase",
    paddingBottom: "30px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      fontSize: "17px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      fontSize: "25px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      display: "flex",
      fontSize: "25px",
    },
  },
  imgStyleFirst: {
    height: "20px",
    width: "200px",
    marginRight: "40px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      width: "80px",
      marginRight: "30px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      width: "120px",
      marginRight: "30px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 812px)": {
      display: "flex",
      width: "120px",
      marginRight: "30px",
    },
  },
  imgStyleSecond: {
    height: "20px",
    width: "200px",
    marginLeft: "40px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      width: "80px",
      marginLeft: "20px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      width: "120px",
      marginLeft: "20px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 812px)": {
      display: "flex",
      width: "120px",
      marginLeft: "20px",
    },
  },
  cardPosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexGrow: 1,
  },
});

const HousesTypesContainer = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={6} sm={12}>
        <Paper className={classes.componentStyle}>
          <span className={classes.positionText}>
            <Typography className={classes.housesTypesText} variant="h3">
              <img
                src="https://img.icons8.com/ios/452/wavy-line.png"
                className={classes.imgStyleFirst}
              />
              4 House Types
              <img
                src="https://img.icons8.com/ios/452/wavy-line.png"
                className={classes.imgStyleSecond}
              />
            </Typography>
          </span>
          <Grid container spacing={3} className={classes.cardPosition}>
            <Grid item xs={6} sm={3}>
              <HousesTypes
                title={` Aspen `}
                imgSrc={"https://svgsilh.com/svg/2037493-9e9e9e.svg"}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <HousesTypes
                title={` Heaven `}
                imgSrc={"https://svgsilh.com/svg/34723-9e9e9e.svg"}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <HousesTypes
                title={` Veil `}
                imgSrc={"https://svgsilh.com/svg/310748-9e9e9e.svg"}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <HousesTypes
                title={` Tower `}
                imgSrc={"https://svgsilh.com/svg/1299093-9e9e9e.svg"}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HousesTypesContainer;
