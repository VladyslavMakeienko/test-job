import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  positionText: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    webkitAlignItems: "center",
    webkitDisplay: "flex",
    webkitFlexDirection: "column",
    mozAlignItems: "center",
    mozDisplay: "flex",
    mozFlexDirection: "column",
    msAlignItems: "center",
    msDisplay: "flex",
    msFlexDirection: "column",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      width: "400px",
      webkitAlignItems: "center",
      webkitDisplay: "flex",
      webkitFlexDirection: "column",
      webkitWidth: "400px",
      mozAlignItems: "center",
      mozDisplay: "flex",
      mozFlexDirection: "column",
      mozWidth: "400px",
      msAlignItems: "center",
      msDisplay: "flex",
      msFlexDirection: "column",
      msWidth: "400px",
    },
  },
  galleryText: {
    textTransform: "uppercase",
    paddingBottom: "30px",
    webkitTextTransform: "uppercase",
    webkitPaddingBottom: "30px",
    mozTextTransform: "uppercase",
    mozPaddingBottom: "30px",
    msTextTransform: "uppercase",
    msPaddingBottom: "30px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      fontSize: "20px",
      webkitDisplay: "flex",
      webkitFontSize: "20px",
      mozDisplay: "flex",
      mozFontSize: "20px",
      msDisplay: "flex",
      msFontSize: "20px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      fontSize: "30px",
      webkitDisplay: "flex",
      webkitFontSize: "30px",
      mozDisplay: "flex",
      mozFontSize: "30px",
      msDisplay: "flex",
      msFontSize: "30px",
    },
  },
  imgStyleFirst: {
    height: "20px",
    width: "200px",
    marginRight: "40px",
    webkitHeight: "20px",
    webkitWidth: "200px",
    webkitMarginRight: "40px",
    mozHeight: "20px",
    mozWidth: "200px",
    mozMarginRight: "40px",
    msHeight: "20px",
    msWidth: "200px",
    msMarginRight: "40px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      width: "80px",
      marginRight: "30px",
      webkitDisplay: "flex",
      webkitWidth: "80px",
      webkitMarginRight: "30px",
      mozDisplay: "flex",
      mozWidth: "80px",
      mozMarginRight: "30px",
      msDisplay: "flex",
      msWidth: "80px",
      msMarginRight: "30px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      width: "120px",
      marginRight: "30px",
      webkitDisplay: "flex",
      webkitWidth: "120px",
      webkitMarginRight: "30px",
      mozDisplay: "flex",
      mozWidth: "120px",
      mozMarginRight: "30px",
      msDisplay: "flex",
      msWidth: "120px",
      msMarginRight: "30px",
    },
  },
  imgStyleSecond: {
    height: "20px",
    width: "200px",
    marginLeft: "40px",
    webkitHeight: "20px",
    webkitWidth: "200px",
    webkitMarginLeft: "40px",
    mozHeight: "20px",
    mozWidth: "200px",
    mozMarginLeft: "40px",
    msHeight: "20px",
    msWidth: "200px",
    msMarginLeft: "40px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      width: "80px",
      marginLeft: "20px",
      webkitDisplay: "flex",
      webkitWidth: "80px",
      webkitMarginLeft: "20px",
      mozDisplay: "flex",
      mozWidth: "80px",
      mozMarginLeft: "20px",
      msDisplay: "flex",
      msWidth: "80px",
      msMarginLeft: "20px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      width: "120px",
      marginLeft: "20px",
      webkitDisplay: "flex",
      webkitWidth: "120px",
      webkitMarginLeft: "20px",
      mozDisplay: "flex",
      mozWidth: "120px",
      mozMarginLeft: "20px",
      msDisplay: "flex",
      msWidth: "120px",
      msMarginLeft: "20px",
    },
  },
});

/* Gallery заголовок */

const GalleryTitle = () => {
  const classes = useStyles();
  return (
    <span className={classes.positionText}>
      <Typography className={classes.galleryText} variant="h3">
        <img
          src="https://img.icons8.com/ios/452/wavy-line.png"
          className={classes.imgStyleFirst}
          alt="Wavy line"
        />
        Gallery
        <img
          src="https://img.icons8.com/ios/452/wavy-line.png"
          className={classes.imgStyleSecond}
          alt="Wavy line"
        />
      </Typography>
    </span>
  );
};

export default GalleryTitle;
