import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import House from "../images/HOUSE.png";
import ImageLink from "./ImageLink";
import ImageText from "./ImageText";

const useStyles = makeStyles(() => ({
  imageHouseStyle: {
    display: "flex",
    height: "300px",
    position: "relative",
    webkitDisplay: "flex",
    webkitHeight: "300px",
    webkitPosition: "relative",
    mozDisplay: "flex",
    mozHeight: "300px",
    mozPosition: "relative",
    msDisplay: "flex",
    msHeight: "300px",
    msPosition: "relative",
  },
}));

/* Image for Slider */

const ImageForSlider = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <img src={House} alt="House" className={classes.imageHouseStyle} />
        <ImageText />
        <ImageLink />
      </div>
    </div>
  );
};

export default ImageForSlider;
