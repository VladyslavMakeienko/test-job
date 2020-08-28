import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  numberStyle: {
    color: "green",
    display: "flex",
    "@media(max-width: 600px)": {
      display: "flex",
      fontSize: "10px",
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
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "150px",
      margin: "30px",
    },
  },
}));

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
