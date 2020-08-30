import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textProject: {
    display: "flex",
    width: "100%",
    position: "absolute",
    left: "150px",
    bottom: "150px",
    textTransform: "uppercase",
    color: "#fff",
    fontSize: "30px",
    webkitDisplay: "flex",
    webkitWidth: "100%",
    webkitPosition: "absolute",
    webkitLeft: "150px",
    webkitBottom: "150px",
    webkitTextTransform: "uppercase",
    webkitColor: "#fff",
    webkitFontSize: "30px",
    mozDisplay: "flex",
    mozWidth: "100%",
    mozPosition: "absolute",
    mozLeft: "150px",
    mozBottom: "150px",
    mozTextTransform: "uppercase",
    mozColor: "#fff",
    mozFontSize: "30px",
    msDisplay: "flex",
    msWidth: "100%",
    msPosition: "absolute",
    msLeft: "150px",
    msBottom: "150px",
    msTextTransform: "uppercase",
    msColor: "#fff",
    msFontSize: "30px",
  },
}));

/* Image Text */

const ImageText = () => {
  const classes = useStyles();
  const textProject = `Veil Project`;
  return (
    <div>
      <div>
        <div className={classes.textProject}>{textProject}</div>
      </div>
    </div>
  );
};

export default ImageText;
