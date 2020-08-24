import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import imageForSiteThird from "../images/imageForSiteThird.jpg";
import imageForSiteSecond from "../images/imageForSiteSecond.jpg";
import imageForSlider from "../images/imageForSlider.jpg";
import DateComponentForGallery from "../Date/DateComponentForGallery";

const useStyles = makeStyles((theme) => ({
  imageFirstStyle: {
    display: "flex",
    width: "400px",
    height: "400px",
  },
  imageSecondStyle: {
    display: "flex",
    width: "400px",
    height: "200px",
    padding: "0 0 10px 0",
  },
  imageThirdStyle: {
    display: "flex",
    width: "400px",
    height: "200px",
  },
  componentStyle: {
    display: "flex",
    padding: "0 7px 0 0",
  },
  allComponent: {
    display: "flex",
    flexDirection: "row",
  },
  componentSecondStyle: {
    display: "flex",
  },
}));

const GalleryImages = () => {
  const classes = useStyles();
  return (
    <div className={classes.allComponent}>
      <div className={classes.componentStyle}>
        {/* first image */}
        <img
          className={classes.imageFirstStyle}
          src={imageForSiteThird}
          alt="Image"
        />
        <DateComponentForGallery />
      </div>
      {/* second photo */}
      <div>
        <div className={classes.componentSecondStyle}>
          <img
            className={classes.imageSecondStyle}
            src={imageForSiteSecond}
            alt="Image"
          />
          <DateComponentForGallery />
        </div>
        {/* third photo */}
        <div className={classes.componentSecondStyle}>
          <img
            className={classes.imageThirdStyle}
            src={imageForSlider}
            alt="Image"
          />
          <DateComponentForGallery />
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
