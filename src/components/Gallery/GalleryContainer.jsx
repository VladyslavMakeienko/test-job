import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import GalleryImages from "./GalleryImages";

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
      <span className={classes.positionText}>
        <Typography className={classes.galleryText} variant="h3">
          <img
            src="https://img.icons8.com/ios/452/wavy-line.png"
            className={classes.imgStyleFirst}
            alt="Image"
          />
          Gallery
          <img
            src="https://img.icons8.com/ios/452/wavy-line.png"
            className={classes.imgStyleSecond}
            alt="Image"
          />
        </Typography>
      </span>
      <Grid container spacing={3} className={classes.galleryPosition}>
        <Grid item xs={12} sm={6}>
          <GalleryImages />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GalleryContainer;
