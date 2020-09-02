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
