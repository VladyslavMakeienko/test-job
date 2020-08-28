import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  positionText: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "400px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "700px",
    },
  },
  housesTypesText: {
    textTransform: "uppercase",
    paddingBottom: "30px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      fontSize: "17px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      fontSize: "25px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      display: "flex",
      fontSize: "25px",
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
    "@media only screen and (min-width: 769px) and (max-width: 812px)": {
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
    "@media only screen and (min-width: 769px) and (max-width: 812px)": {
      display: "flex",
      width: "120px",
      marginLeft: "20px",
    },
  },
});

const HousesTitle = () => {
  const classes = useStyles();
  return (
    <span className={classes.positionText}>
      <Typography className={classes.housesTypesText} variant="h3">
        <img
          src="https://img.icons8.com/ios/452/wavy-line.png"
          className={classes.imgStyleFirst}
          alt="Wavy line"
        />
        4 House Types
        <img
          src="https://img.icons8.com/ios/452/wavy-line.png"
          className={classes.imgStyleSecond}
          alt="Wavy line"
        />
      </Typography>
    </span>
  );
};

export default HousesTitle;
