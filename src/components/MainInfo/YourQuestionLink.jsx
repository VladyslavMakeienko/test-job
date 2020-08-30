import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  questionStyle: {
    display: "flex",
    border: "1px solid green",
    padding: "10px",
    borderRadius: "100px",
    textTransform: "uppercase",
    color: "green",
    boxSizing: "content-box",
    width: "150px",
    justifyContent: "center",
    webkitDisplay: "flex",
    webkitBorder: "1px solid green",
    webkitPadding: "10px",
    webkitBorderRadius: "100px",
    webkitTextTransform: "uppercase",
    webkitColor: "green",
    webkitBoxSizing: "content-box",
    webkitWidth: "150px",
    webkitJustifyContent: "center",
    mozDisplay: "flex",
    mozBorder: "1px solid green",
    mozPadding: "10px",
    mozBorderRadius: "100px",
    mozTextTransform: "uppercase",
    mozColor: "green",
    mozBoxSizing: "content-box",
    mozWidth: "150px",
    mozJustifyContent: "center",
    msDisplay: "flex",
    msBorder: "1px solid green",
    msPadding: "10px",
    msBorderRadius: "100px",
    msTextTransform: "uppercase",
    msColor: "green",
    msBoxSizing: "content-box",
    msWidth: "150px",
    msJustifyContent: "center",
    "@media(max-width: 600px)": {
      display: "flex",
      width: "60px",
      fontSize: "15px",
      marginRight: "15px",
      webkitDisplay: "flex",
      webkitWidth: "60px",
      webkitFontSize: "15px",
      webkitMarginRight: "15px",
      mozDisplay: "flex",
      mozWidth: "60px",
      mozFontSize: "15px",
      mozMarginRight: "15px",
      msDisplay: "flex",
      msWidth: "60px",
      msFontSize: "15px",
      msMarginRight: "15px",
    },
  },
  questionTextStyle: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    webkitJustifyContent: "center",
    webkitDisplay: "flex",
    webkitAlignItems: "center",
    mozJustifyContent: "center",
    mozDisplay: "flex",
    mozAlignItems: "center",
    msJustifyContent: "center",
    msDisplay: "flex",
    msAlignItems: "center",
    "@media(max-width: 600px)": {
      display: "flex",
      width: "20px",
      fontSize: "10px",
      webkitDisplay: "flex",
      webkitWidth: "20px",
      webkitFontSize: "10px",
      mozDisplay: "flex",
      mozWidth: "20px",
      mozFontSize: "10px",
      msDisplay: "flex",
      msWidth: "20px",
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

/* Your Question Link */

const YourQuestionLink = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Link href="#" onClick={preventDefault} color="inherit" underline="none">
      <div className={classes.positionElements}>
        <div className={classes.questionStyle}>
          <Typography className={classes.questionTextStyle}>
            Your Question
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default YourQuestionLink;
