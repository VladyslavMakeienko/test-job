import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3),
    },
  },
}));

/* About в шапке */

const About = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const textAbout = `About`;
  return (
    <Typography className={classes.root}>
      <Link href="#" onClick={preventDefault} color="inherit" underline="none">
        {textAbout}
      </Link>
    </Typography>
  );
};

export default About;
