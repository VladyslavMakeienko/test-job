import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dateStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    color: "white",
    padding: "0 0 0 15px",
    webkitDisplay: "flex",
    webkitFlexDirection: "row",
    webkitAlignItems: "center",
    webkitPosition: "absolute",
    webkitColor: "white",
    webkitPadding: "0 0 0 15px",
    mozDisplay: "flex",
    mozFlexDirection: "row",
    mozAlignItems: "center",
    mozPosition: "absolute",
    mozColor: "white",
    mozPadding: "0 0 0 15px",
    msDisplay: "flex",
    msFlexDirection: "row",
    msAlignItems: "center",
    msPosition: "absolute",
    msColor: "white",
    msPadding: "0 0 0 15px",
  },
  titleDate: {
    fontSize: 50,
    padding: "0 0 0 15px",
    justifyContent: "center",
    display: "flex",
    webkitFontSize: 50,
    webkitPadding: "0 0 0 15px",
    webkitJustifyContent: "center",
    webkitDisplay: "flex",
    mozFontSize: 50,
    mozPadding: "0 0 0 15px",
    mozJustifyContent: "center",
    mozDisplay: "flex",
    msFontSize: 50,
    msPadding: "0 0 0 15px",
    msJustifyContent: "center",
    msDisplay: "flex",
  },
  titleMonth: {
    textTransform: "uppercase",
    padding: "1px",
    display: "flex",
    flexDirection: "column",
    webkitTextTransform: "uppercase",
    webkitPadding: "1px",
    webkitDisplay: "flex",
    webkitFlexDirection: "column",
    mozTextTransform: "uppercase",
    mozPadding: "1px",
    mozDisplay: "flex",
    mozFlexDirection: "column",
    msTextTransform: "uppercase",
    msPadding: "1px",
    msDisplay: "flex",
    msFlexDirection: "column",
  },
  titleYear: {
    padding: "1px",
    display: "flex",
    flexDirection: "column",
    webkitPadding: "1px",
    webkitDisplay: "flex",
    webkitFlexDirection: "column",
    mozPadding: "1px",
    mozDisplay: "flex",
    mozFlexDirection: "column",
    msPadding: "1px",
    msDisplay: "flex",
    msFlexDirection: "column",
  },
}));

/* Date компонент */

const DateComponentForGallery = () => {
  const classes = useStyles();
  return (
    <div className={classes.dateStyle}>
      <span className={classes.titleDate}> {new Date().getDate()} </span>
      <div>
        <span className={classes.titleMonth}>
          {new Date().toLocaleString("en", { month: "long" })}{" "}
        </span>
        <span className={classes.titleYear}>{new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default DateComponentForGallery;
