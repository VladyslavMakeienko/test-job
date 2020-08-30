import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3),
      mozMarginLeft: theme.spacing(2),
      mozMarginRight: theme.spacing(3),
      webkitMarginLeft: theme.spacing(2),
      webkitMarginRight: theme.spacing(3),
      msMarginLeft: theme.spacing(2),
      msMarginRight: theme.spacing(3),
    },
  },
}));

/* About в шапке */

const About = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Typography className={classes.root}>
      <Link href="#" onClick={preventDefault} color="inherit" underline="none">
        <div>About</div>
      </Link>
    </Typography>
  );
};

export default About;
