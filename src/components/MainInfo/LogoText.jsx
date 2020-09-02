import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  logoText: {
    color: "grey",
    display: "flex",
    margin: "100px",

    "@media(max-width: 600px)": {
      display: "flex",
      width: "20px",
      fontSize: "15px",
      marginRight: "170px",
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

/* Logo Text */

const LogoText = () => {
  const logo = `wolshino.com`;
  const classes = useStyles();
  return (
    <div className={classes.positionElements}>
      <Typography variant="h5" className={classes.logoText}>
        {logo}
      </Typography>
    </div>
  );
};

export default LogoText;
