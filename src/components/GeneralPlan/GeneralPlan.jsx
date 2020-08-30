import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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

/* General Plan шапка */

const GeneralPlan = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Typography className={classes.root}>
      <Link href="#" onClick={preventDefault} color="inherit" underline="none">
        <Box component="div">General Plan</Box>
      </Link>
    </Typography>
  );
};

export default GeneralPlan;
