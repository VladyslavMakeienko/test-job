import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "./Copyright";
import ShareWithYourFriends from "./ShareWithYourFriends";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh",
    justifyContent: "space-between",
    webkitDisplay: "flex",
    webkitFlexDirection: "row",
    webkitMinHeight: "100vh",
    webkitJustifyContent: "space-between",
    mozDisplay: "flex",
    mozFlexDirection: "row",
    mozMinHeight: "100vh",
    mozJustifyContent: "space-between",
    msDisplay: "flex",
    msFlexDirection: "row",
    msMinHeight: "100vh",
    msJustifyContent: "space-between",
  },

  footer: {
    padding: theme.spacing(3, 2),
    flexGrow: 1,
    marginTop: "auto",
    justifyContent: "space-between",
    webkitPadding: theme.spacing(3, 2),
    webkitFlexGrow: 1,
    webkitMarginTop: "auto",
    webkitJustifyContent: "space-between",
    mozPadding: theme.spacing(3, 2),
    mozFlexGrow: 1,
    mozMarginTop: "auto",
    mozJustifyContent: "space-between",
    msPadding: theme.spacing(3, 2),
    msFlexGrow: 1,
    msMarginTop: "auto",
    msJustifyContent: "space-between",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  containerStyle: {
    justifyContent: "space-around",
    display: "flex",
    alignItems: "center",
    webkitJustifyContent: "space-around",
    webkitDisplay: "flex",
    webkitAlignItems: "center",
    mozJustifyContent: "space-around",
    mozDisplay: "flex",
    mozAlignItems: "center",
    msJustifyContent: "space-around",
    msDisplay: "flex",
    msAlignItems: "center",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      justifyContent: "space-around",
      display: "flex",
      width: "300px",
      webkitJustifyContent: "space-around",
      webkitDisplay: "flex",
      webkitWidth: "300px",
      mozJustifyContent: "space-around",
      mozDisplay: "flex",
      mozWidth: "300px",
      msJustifyContent: "space-around",
      msDisplay: "flex",
      msWidth: "300px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      justifyContent: "center",
      display: "flex",
      width: "500px",
      alignItems: "center",
      webkitJustifyContent: "center",
      webkitDisplay: "flex",
      webkitWidth: "500px",
      webkitAlignItems: "center",
      mozJustifyContent: "center",
      mozDisplay: "flex",
      mozWidth: "500px",
      mozAlignItems: "center",
      msJustifyContent: "center",
      msDisplay: "flex",
      msWidth: "500px",
      msAlignItems: "center",
    },
  },
}));

/* Footer site */

const StickyFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container className={classes.containerStyle}>
          <ShareWithYourFriends />
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default StickyFooter;
