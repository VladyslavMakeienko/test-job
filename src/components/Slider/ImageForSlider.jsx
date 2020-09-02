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
