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
    webkitDisplay: "flex",
    webkitWidth: "400px",
    webkitHeight: "400px",
    mozDisplay: "flex",
    mozWidth: "400px",
    mozHeight: "400px",
    msDisplay: "flex",
    msWidth: "400px",
    msHeight: "400px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      width: "200px",
      height: "350px",
      webkitDisplay: "flex",
      webkitWidth: "200px",
      webkitHeight: "350px",
      mozDisplay: "flex",
      mozWidth: "200px",
      mozHeight: "350px",
      msDisplay: "flex",
      msWidth: "200px",
      msHeight: "350px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      width: "300px",
      height: "400px",
      webkitDisplay: "flex",
      webkitWidth: "300px",
      webkitHeight: "400px",
      mozDisplay: "flex",
      mozWidth: "300px",
      mozHeight: "400px",
      msDisplay: "flex",
      msWidth: "300px",
      msHeight: "400px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      display: "flex",
      width: "300px",
      height: "400px",
      webkitDisplay: "flex",
      webkitWidth: "300px",
      webkitHeight: "400px",
      mozDisplay: "flex",
      mozWidth: "300px",
      mozHeight: "400px",
      msDisplay: "flex",
      msWidth: "300px",
      msHeight: "400px",
    },
  },
  imageSecondStyle: {
    display: "flex",
    width: "400px",
    height: "200px",
    padding: "0 0 10px 0",
    webkitDisplay: "flex",
    webkitWidth: "400px",
    webkitHeight: "200px",
    webkitPadding: "0 0 10px 0",
    mozDisplay: "flex",
    mozWidth: "400px",
    mozHeight: "200px",
    mozPadding: "0 0 10px 0",
    msDisplay: "flex",
    msWidth: "400px",
    msHeight: "200px",
    msPadding: "0 0 10px 0",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      width: "200px",
      height: "175px",
      padding: "0 0 10px 0",
      webkitDisplay: "flex",
      webkitWidth: "200px",
      webkitHeight: "175px",
      webkitPadding: "0 0 10px 0",
      mozDisplay: "flex",
      mozWidth: "200px",
      mozHeight: "175px",
      mozPadding: "0 0 10px 0",
      msDisplay: "flex",
      msWidth: "200px",
      msHeight: "175px",
      msPadding: "0 0 10px 0",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      width: "300px",
      height: "200px",
      padding: "0 0 10px 0",
      webkitDisplay: "flex",
      webkitWidth: "300px",
      webkitHeight: "200px",
      webkitPadding: "0 0 10px 0",
      mozDisplay: "flex",
      mozWidth: "300px",
      mozHeight: "200px",
      mozPadding: "0 0 10px 0",
      msDisplay: "flex",
      msWidth: "300px",
      msHeight: "200px",
      msPadding: "0 0 10px 0",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      display: "flex",
      width: "300px",
      height: "200px",
      padding: "0 0 10px 0",
      webkitDisplay: "flex",
      webkitWidth: "300px",
      webkitHeight: "200px",
      webkitPadding: "0 0 10px 0",
      mozDisplay: "flex",
      mozWidth: "300px",
      mozHeight: "200px",
      mozPadding: "0 0 10px 0",
      msDisplay: "flex",
      msWidth: "300px",
      msHeight: "200px",
      msPadding: "0 0 10px 0",
    },
  },
  imageThirdStyle: {
    display: "flex",
    width: "400px",
    height: "200px",
    webkitDisplay: "flex",
    webkitWidth: "400px",
    webkitHeight: "200px",
    mozDisplay: "flex",
    mozWidth: "400px",
    mozHeight: "200px",
    msDisplay: "flex",
    msWidth: "400px",
    msHeight: "200px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      width: "200px",
      height: "175px",
      webkitDisplay: "flex",
      webkitWidth: "200px",
      webkitHeight: "175px",
      mozDisplay: "flex",
      mozWidth: "200px",
      mozHeight: "175px",
      msDisplay: "flex",
      msWidth: "200px",
      msHeight: "175px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      width: "300px",
      height: "200px",
      webkitDisplay: "flex",
      webkitWidth: "300px",
      webkitHeight: "200px",
      mozDisplay: "flex",
      mozWidth: "300px",
      mozHeight: "200px",
      msDisplay: "flex",
      msWidth: "300px",
      msHeight: "200px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      display: "flex",
      width: "300px",
      height: "200px",
      webkitDisplay: "flex",
      webkitWidth: "300px",
      webkitHeight: "200px",
      mozDisplay: "flex",
      mozWidth: "300px",
      mozHeight: "200px",
      msDisplay: "flex",
      msWidth: "300px",
      msHeight: "200px",
    },
  },
  componentStyle: {
    display: "flex",
    padding: "0 7px 0 0",
    webkitDisplay: "flex",
    webkitPadding: "0 7px 0 0",
    mozDisplay: "flex",
    mozPadding: "0 7px 0 0",
    msDisplay: "flex",
    msPadding: "0 7px 0 0",
  },
  allComponent: {
    display: "flex",
    flexDirection: "row",
    webkitDisplay: "flex",
    webkitFlexDirection: "row",
    mozDisplay: "flex",
    mozFlexDirection: "row",
    msDisplay: "flex",
    msFlexDirection: "row",
  },
  componentSecondStyle: {
    display: "flex",
    webkitDisplay: "flex",
    mozDisplay: "flex",
    msDisplay: "flex",
  },
}));

/* Gallery Images */

const GalleryImages = () => {
  const classes = useStyles();
  return (
    <div className={classes.allComponent}>
      <div className={classes.componentStyle}>
        {/* first image */}
        <img
          className={classes.imageFirstStyle}
          src={imageForSiteThird}
          alt="Gallery"
        />
        <DateComponentForGallery />
      </div>
      {/* second photo */}
      <div>
        <div className={classes.componentSecondStyle}>
          <img
            className={classes.imageSecondStyle}
            src={imageForSiteSecond}
            alt="Gallery"
          />
          <DateComponentForGallery />
        </div>
        {/* third photo */}
        <div className={classes.componentSecondStyle}>
          <img
            className={classes.imageThirdStyle}
            src={imageForSlider}
            alt="Gallery"
          />
          <DateComponentForGallery />
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
