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
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      fontSize: "25px",
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
