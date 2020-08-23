import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import imageForSiteThird from "../images/imageForSiteThird.jpg";
import imageForSiteSecond from "../images/imageForSiteSecond.jpg";
import imageForSlider from "../images/imageForSlider.jpg";

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
  dateStyle: {
    display: "flex",
    flexDirection: "row",
    // width: "25%",
    alignItems: "center",
    position: "absolute",
    color: "white",
    padding: "0 0 0 15px",
  },
  titleDate: {
    fontSize: 50,
    padding: "0 0 0 15px",
    justifyContent: "center",
    display: "flex",
  },
  titleMonth: {
    textTransform: "uppercase",
    padding: "1px",
    display: "flex",
    flexDirection: "column",
  },
  titleYear: {
    padding: "1px",
    display: "flex",
    flexDirection: "column",
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
        <img
          className={classes.imageFirstStyle}
          src={imageForSiteThird}
          alt="Image"
        />
        <div className={classes.dateStyle}>
          <span className={classes.titleDate}> {new Date().getDate()} </span>
          <div>
            <span className={classes.titleMonth}>
              {new Date().toLocaleString("en", { month: "long" })}{" "}
            </span>
            <span className={classes.titleYear}>
              {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
      {/* 2 photo */}
      <div>
        <div className={classes.componentSecondStyle}>
          <img
            className={classes.imageSecondStyle}
            src={imageForSiteSecond}
            alt="Image"
          />
          <div className={classes.dateStyle}>
            <span className={classes.titleDate}> {new Date().getDate()} </span>
            <div>
              <span className={classes.titleMonth}>
                {new Date().toLocaleString("en", { month: "long" })}{" "}
              </span>
              <span className={classes.titleYear}>
                {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
        {/* third photo */}
        <div className={classes.componentSecondStyle}>
          <img
            className={classes.imageThirdStyle}
            src={imageForSlider}
            alt="Image"
          />
          <div className={classes.dateStyle}>
            <span className={classes.titleDate}> {new Date().getDate()} </span>
            <div>
              <span className={classes.titleMonth}>
                {new Date().toLocaleString("en", { month: "long" })}{" "}
              </span>
              <span className={classes.titleYear}>
                {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
