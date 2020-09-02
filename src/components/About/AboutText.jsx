import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  textStyle: {
    justifyContent: "center",
    padding: "10px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },
});

/* About текст описания */

const AboutText = () => {
  const classes = useStyles();
  const textAbout = `New summer resort ... "It does not happen!" - You say - "Or is `;
  return (
    <div className={classes.textStyle}>
      <Typography className={classes.textStyle}>{textAbout}</Typography>
    </div>
  );
};

export default AboutText;
