import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ImageForSlider from "./ImageForSlider";
import ImageFrontOfTheHouse from "./ImageFrontOfTheHouse";
import ImageBackOfTheHouse from "./ImageBackOfTheHouse";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row",
    alignContent: "center",
    textAlign: "center",
    maxWidth: "1500px",
  },
  paperStyle: {
    display: "flex",
    flexFlow: "row",
  },
}));

const ImagesContainer = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paperStyle}>
        <ImageBackOfTheHouse />
        <ImageForSlider />
        <ImageFrontOfTheHouse />
      </Paper>
    </div>
  );
};

export default ImagesContainer;
