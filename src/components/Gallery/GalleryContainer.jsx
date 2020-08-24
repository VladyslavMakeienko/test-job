import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";
import Fade from "./Fade";
import GalleryImages from "./GalleryImages";

const useStyles = makeStyles({
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    height: "400px",
    justifyContent: "center",
  },
  positionText: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  galleryText: {
    textTransform: "uppercase",
    paddingBottom: "30px",
  },
  imgStyleFirst: {
    height: "20px",
    width: "200px",
    marginRight: "40px",
  },
  imgStyleSecond: {
    height: "20px",
    width: "200px",
    marginLeft: "40px",
  },
  galleryPosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexGrow: 1,
  },
});

const GalleryContainer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.componentStyle}>
      <Box component="span" className={classes.positionText}>
        <Typography className={classes.galleryText} variant="h3">
          <Box
            component="img"
            src="https://img.icons8.com/ios/452/wavy-line.png"
            className={classes.imgStyleFirst}
          />
          Gallery
          <Box
            component="img"
            src="https://img.icons8.com/ios/452/wavy-line.png"
            className={classes.imgStyleSecond}
          />
        </Typography>
      </Box>
      <Grid container spacing={3} className={classes.galleryPosition}>
        <Grid item xs={12} sm={6}>
          <GalleryImages />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GalleryContainer;
