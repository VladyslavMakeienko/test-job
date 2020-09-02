import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

/* Projects шапка */

const Projects = () => {
  const classes = useStyles();
  const textProjects = `Projects`;
  return (
    <Typography className={classes.root}>
      <Link href="#" color="inherit" underline="none">
        {textProjects}
      </Link>
    </Typography>
  );
};

export default Projects;
