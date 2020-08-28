import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import GalleryImages from "./GalleryImages";
import GalleryTitle from "./GalleryTitle";

const useStyles = makeStyles({
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    height: "400px",
    justifyContent: "center",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      flexDirection: "row",
      height: "400px",
      justifyContent: "center",
    },
  },
  galleryPosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexGrow: 1,
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      width: "400px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      width: "300px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      width: "400px",
    },
    "@media only screen and (min-width: 828px) and (max-width: 1100px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      width: "500px",
    },
    "@media only screen and (min-width: 1101px) and (max-width: 1300px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      width: "600px",
    },
  },
});

const GalleryContainer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.componentStyle}>
      <GalleryTitle />
      <Grid container spacing={3} className={classes.galleryPosition}>
        <Grid item xs={12} sm={6}>
          <GalleryImages />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GalleryContainer;
