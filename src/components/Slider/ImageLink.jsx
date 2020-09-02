import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(() => ({
  linkStyle: {
    color: "white",
  },
  linkText: {
    border: "1px solid white",
    borderRadius: "80px",
    width: "140px",
    textTransform: "uppercase",
    padding: "7px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0  35% 0 35%",
    alignItems: "center",
    position: "absolute",
    bottom: "80px",

    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      margin: "0 20% 0 20%",
    },
  },
}));

const ImageLink = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const textLink = `Join`;
  return (
    <Link
      href="#"
      onClick={preventDefault}
      className={classes.linkStyle}
      underline="none"
    >
      <div className={classes.linkText}>{textLink}</div>
    </Link>
  );
};

export default ImageLink;
