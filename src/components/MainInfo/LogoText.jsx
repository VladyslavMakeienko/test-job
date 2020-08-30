import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logoText: {
    color: "grey",
    display: "flex",
    margin: "100px",
    webkitColor: "grey",
    webkitDisplay: "flex",
    webkitMargin: "100px",
    mozColor: "grey",
    mozDisplay: "flex",
    mozMargin: "100px",
    msColor: "grey",
    msDisplay: "flex",
    msMargin: "100px",
    "@media(max-width: 600px)": {
      display: "flex",
      width: "20px",
      fontSize: "15px",
      marginRight: "170px",
      webkitDisplay: "flex",
      webkitWidth: "20px",
      webkitFontSize: "15px",
      webkitMarginRight: "170px",
      mozDisplay: "flex",
      mozWidth: "20px",
      mozFontSize: "15px",
      mozMarginRight: "170px",
      msDisplay: "flex",
      msWidth: "20px",
      msFontSize: "15px",
      msMarginRight: "170px",
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
