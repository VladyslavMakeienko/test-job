import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FrontOfTheHouseGrey from "../images/FrontOfTheHouseGrey.png";

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

/* Image front of the House */

const ImageFrontOfTheHouse = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <img
          src={FrontOfTheHouseGrey}
          alt="House"
          className={classes.imageHouseStyle}
        />
      </div>
    </div>
  );
};

export default ImageFrontOfTheHouse;
