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

/* Location шапка */

const Location = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const textLocation = `Location`;
  return (
    <Typography className={classes.root}>
      <Link href="#" onClick={preventDefault} color="inherit" underline="none">
        {textLocation}
      </Link>
    </Typography>
  );
};

export default Location;
