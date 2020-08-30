import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

/* Copyright Wolshino */

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"© "}
      <Link color="inherit" href="#">
        wolshino
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;