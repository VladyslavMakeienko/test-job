import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  numberStyle: {
    color: "green",
    display: "flex",
    webkitColor: "green",
    webkitDisplay: "flex",
    mozColor: "green",
    mozDisplay: "flex",
    msColor: "green",
    msDisplay: "flex",
    "@media(max-width: 600px)": {
      display: "flex",
      fontSize: "10px",
      webkitDisplay: "flex",
      webkitFontSize: "10px",
      mozDisplay: "flex",
      mozFontSize: "10px",
      msDisplay: "flex",
      msFontSize: "10px",
    },
  },
  positionElements: {
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "95px",
      margin: "20px",
      webkitDisplay: "flex",
      webkitFlexDirection: "row",
      webkitJustifyContent: "center",
      webkitAlignItems: "center",
      webkitWidth: "95px",
      webkitMargin: "20px",
      mozDisplay: "flex",
      mozFlexDirection: "row",
      mozJustifyContent: "center",
      mozAlignItems: "center",
      mozWidth: "95px",
      mozMargin: "20px",
      msDisplay: "flex",
      msFlexDirection: "row",
      msJustifyContent: "center",
      msAlignItems: "center",
      msWidth: "95px",
      msMargin: "20px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "150px",
      margin: "30px",
      webkitDisplay: "flex",
      webkitFlexDirection: "row",
      webkitJustifyContent: "center",
      webkitAlignItems: "center",
      webkitWidth: "150px",
      webkitMargin: "30px",
      mozDisplay: "flex",
      mozFlexDirection: "row",
      mozJustifyContent: "center",
      mozAlignItems: "center",
      mozWidth: "150px",
      mozMargin: "30px",
      msDisplay: "flex",
      msFlexDirection: "row",
      msJustifyContent: "center",
      msAlignItems: "center",
      msWidth: "150px",
      msMargin: "30px",
    },
  },
}));

/* Mobile Phone Number */

const MobilePhoneNumber = () => {
  const classes = useStyles();
  const number = `+2 495 134-27-72`;
  return (
    <div className={classes.positionElements}>
      <Typography className={classes.numberStyle}>{number}</Typography>
    </div>
  );
};

export default MobilePhoneNumber;
