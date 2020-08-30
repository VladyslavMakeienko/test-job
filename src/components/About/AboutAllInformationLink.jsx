import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  linkStyle: {
    color: "#fff",
    webkitColor: "#fff",
    mozColor: "#fff",
    msColor: "#fff",
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
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      margin: "0 20% 0 20%",
      webkitMargin: "0 20% 0 20%",
      mozMargin: "0 20% 0 20%",
      msMargin: "0 20% 0 20%",
    },
  },
});

/* About кнопка All Information */

const AboutAllInformationLink = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const textLink = `All Information`;
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

export default AboutAllInformationLink;
