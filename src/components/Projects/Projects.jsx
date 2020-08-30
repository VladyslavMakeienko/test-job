import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
      webkitMarginLeft: theme.spacing(2),
      mozMarginLeft: theme.spacing(2),
      msMarginLeft: theme.spacing(2),
    },
  },
}));

/* Projects шапка */

const Projects = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Typography className={classes.root}>
      <Link href="#" color="inherit" underline="none">
        <div>Projects</div>
      </Link>
    </Typography>
  );
};

export default Projects;
