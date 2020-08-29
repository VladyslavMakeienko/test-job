import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BackOfTheHouseGrey from "../images/BackOfTheHouseGrey.png";

const useStyles = makeStyles(() => ({
  imageHouseStyle: {
    display: "flex",
    height: "300px",
    position: "relative",
  },
}));

const ImageBackOfTheHouse = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <img
          src={BackOfTheHouseGrey}
          alt="House"
          className={classes.imageHouseStyle}
        />
      </div>
    </div>
  );
};

export default ImageBackOfTheHouse;
