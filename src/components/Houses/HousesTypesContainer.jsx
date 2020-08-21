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
  },
  housesTypesText: {
    textTransform: "uppercase",
    paddingBottom: "30px",
  },
  imgStyleFirst: {
    height: "20px",
    width: "200px",
    marginRight: "40px",
  },
  imgStyleSecond: {
    height: "20px",
    width: "200px",
    marginLeft: "40px",
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
    <Paper className={classes.componentStyle}>
      <Box component="span" className={classes.positionText}>
        <Typography className={classes.housesTypesText} variant="h3">
          <Box
            component="img"
            src="https://img.icons8.com/ios/452/wavy-line.png"
            className={classes.imgStyleFirst}
          />
          6 House Types
          <Box
            component="img"
            src="https://img.icons8.com/ios/452/wavy-line.png"
            className={classes.imgStyleSecond}
          />
        </Typography>
      </Box>
      <Grid container spacing={3} className={classes.cardPosition}>
        {/* <Box className={classes.cardPosition}> */}
        <Grid item xs={12} sm={3}>
          <HousesTypes
            title={` Aspen `}
            imgSrc={"https://svgsilh.com/svg/2037493-9e9e9e.svg"}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <HousesTypes
            title={` Heaven `}
            imgSrc={"https://svgsilh.com/svg/34723-9e9e9e.svg"}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <HousesTypes
            title={` Veil `}
            imgSrc={"https://svgsilh.com/svg/310748-9e9e9e.svg"}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <HousesTypes
            title={` Tower `}
            imgSrc={"https://svgsilh.com/svg/1299093-9e9e9e.svg"}
          />
        </Grid>
        {/* </Box> */}
      </Grid>
    </Paper>
  );
};

export default HousesTypesContainer;
