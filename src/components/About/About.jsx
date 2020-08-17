import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(3),
    },
  },
}));

const About = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Typography className={classes.root}>
      <Link href="#" onClick={preventDefault} color="inherit" underline="none">
        <Box component="div">About</Box>
      </Link>
    </Typography>
  );
};

export default About;
