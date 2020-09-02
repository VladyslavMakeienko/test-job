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
    justifyContent: "space-between",
  },
  footer: {
    padding: theme.spacing(3, 2),
    flexGrow: 1,
    marginTop: "auto",
    justifyContent: "space-between",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  containerStyle: {
    justifyContent: "space-around",
    display: "flex",
    alignItems: "center",

    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      justifyContent: "space-around",
      display: "flex",
      width: "300px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      justifyContent: "center",
      display: "flex",
      width: "500px",
      alignItems: "center",
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
