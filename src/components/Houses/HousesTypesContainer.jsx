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
    webkitDisplay: "flex",
    webkitFlexDirection: "row",
    webkitFlexGrow: 1,
    webkitHeight: "400px",
    webkitJustifyContent: "center",
    mozDisplay: "flex",
    mozFlexDirection: "row",
    mozFlexGrow: 1,
    mozHeight: "400px",
    mozJustifyContent: "center",
    msDisplay: "flex",
    msFlexDirection: "row",
    msFlexGrow: 1,
    msHeight: "400px",
    msJustifyContent: "center",
  },
  cardPosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexGrow: 1,
    webkitDisplay: "flex",
    webkitAlignItems: "center",
    webkitJustifyContent: "center",
    webkitFlexDirection: "row",
    webkitFlexGrow: 1,
    mozDisplay: "flex",
    mozAlignItems: "center",
    mozJustifyContent: "center",
    mozFlexDirection: "row",
    mozFlexGrow: 1,
    msDisplay: "flex",
    msAlignItems: "center",
    msJustifyContent: "center",
    msFlexDirection: "row",
    msFlexGrow: 1,
  },
});

/* Houses Types раздел */

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
