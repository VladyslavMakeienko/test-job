import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(() => ({
  linkStyle: {
    color: "white",
    webkitColor: "white",
    mozColor: "white",
    msColor: "white",
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
    webkitBorder: "1px solid white",
    webkitBorderRadius: "80px",
    webkitWidth: "140px",
    webkitTextTransform: "uppercase",
    webkitPadding: "7px",
    webkitDisplay: "flex",
    webkitFlexDirection: "column",
    webkitJustifyContent: "center",
    webkitMargin: "0  35% 0 35%",
    webkitAlignItems: "center",
    webkitPosition: "absolute",
    webkitBottom: "80px",
    mozBorder: "1px solid white",
    mozBorderRadius: "80px",
    mozWidth: "140px",
    mozTextTransform: "uppercase",
    mozPadding: "7px",
    mozDisplay: "flex",
    mozFlexDirection: "column",
    mozJustifyContent: "center",
    mozMargin: "0  35% 0 35%",
    mozAlignItems: "center",
    mozPosition: "absolute",
    mozBottom: "80px",
    msBorder: "1px solid white",
    msBorderRadius: "80px",
    msWidth: "140px",
    msTextTransform: "uppercase",
    msPadding: "7px",
    msDisplay: "flex",
    msFlexDirection: "column",
    msJustifyContent: "center",
    msMargin: "0  35% 0 35%",
    msAlignItems: "center",
    msPosition: "absolute",
    msBottom: "80px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      margin: "0 20% 0 20%",
      webkitMargin: "0 20% 0 20%",
      mozMargin: "0 20% 0 20%",
      msMargin: "0 20% 0 20%",
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
