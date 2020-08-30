import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  aboutText: {
    textTransform: "uppercase",
    paddingTop: "10%",
    justifyContent: "center",
    color: "#fff",
    display: "flex",
    webkitTextTransform: "uppercase",
    webkitPaddingTop: "10%",
    webkitJustifyContent: "center",
    webkitColor: "#fff",
    webkitDisplay: "flex",
    mozTextTransform: "uppercase",
    mozPaddingTop: "10%",
    mozJustifyContent: "center",
    mozColor: "#fff",
    mozDisplay: "flex",
    msTextTransform: "uppercase",
    msPaddingTop: "10%",
    msJustifyContent: "center",
    msColor: "#fff",
    msDisplay: "flex",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      fontSize: "25px",
      webkitFontSize: "25px",
      mozFontSize: "25px",
      msFontSize: "25px",
    },
  },
});

/* About заголовок */

const AboutTitle = () => {
  const classes = useStyles();
  const textTitle = `About`;
  return (
    <Typography variant="h3" className={classes.aboutText}>
      {textTitle}
    </Typography>
  );
};

export default AboutTitle;
