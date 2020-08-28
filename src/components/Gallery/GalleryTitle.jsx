import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  positionText: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      width: "400px",
    },
  },
  galleryText: {
    textTransform: "uppercase",
    paddingBottom: "30px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      fontSize: "20px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      fontSize: "30px",
    },
  },
  imgStyleFirst: {
    height: "20px",
    width: "200px",
    marginRight: "40px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      width: "80px",
      marginRight: "30px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      width: "120px",
      marginRight: "30px",
    },
  },
  imgStyleSecond: {
    height: "20px",
    width: "200px",
    marginLeft: "40px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      width: "80px",
      marginLeft: "20px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      width: "120px",
      marginLeft: "20px",
    },
  },
});

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
