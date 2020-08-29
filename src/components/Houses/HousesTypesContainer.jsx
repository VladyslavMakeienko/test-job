import React from "react";
import HousesTypes from "./HousesTypes";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import HousesTitle from "./HousesTitle";

const useStyles = makeStyles({
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    height: "400px",
    justifyContent: "center",
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
      <Grid item xs={12}>
        <Paper className={classes.componentStyle}>
          <HousesTitle />
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
