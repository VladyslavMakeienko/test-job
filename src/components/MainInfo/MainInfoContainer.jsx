import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import YourQuestionLink from "./YourQuestionLink";
import MobilePhoneNumber from "./MobilePhoneNumber";
import LogoText from "./LogoText";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    height: "200px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    webkitHeight: "200px",
    webkitJustifyContent: "center",
    webkitDisplay: "flex",
    webkitAlignItems: "center",
    webkitFlexGrow: 1,
    mozHeight: "200px",
    mozJustifyContent: "center",
    mozDisplay: "flex",
    mozAlignItems: "center",
    mozFlexGrow: 1,
    msHeight: "200px",
    msJustifyContent: "center",
    msDisplay: "flex",
    msAlignItems: "center",
    msFlexGrow: 1,
  },
  someStyle: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    webkitDisplay: "flex",
    webkitFlexGrow: 1,
    webkitJustifyContent: "center",
    mozDisplay: "flex",
    mozFlexGrow: 1,
    mozJustifyContent: "center",
    msDisplay: "flex",
    msFlexGrow: 1,
    msJustifyContent: "center",
  },
  mainInfo: {
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      minWidth: "320px",
      maxWidth: "480px",
      webkitDisplay: "flex",
      webkitFlexDirection: "row",
      webkitJustifyContent: "flex-start",
      webkitAlignItems: "center",
      webkitMinWidth: "320px",
      webkitMaxWidth: "480px",
      mozDisplay: "flex",
      mozFlexDirection: "row",
      mozJustifyContent: "flex-start",
      mozAlignItems: "center",
      mozMinWidth: "320px",
      mozMaxWidth: "480px",
      msDisplay: "flex",
      msFlexDirection: "row",
      msJustifyContent: "flex-start",
      msAlignItems: "center",
      msMinWidth: "320px",
      msMaxWidth: "480px",
    },
  },
}));
{
  /* Главная информация */
}
const MainInfoContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainInfo}>
      <div className={classes.someStyle}>
        <Paper className={classes.paperStyle}>
          <MobilePhoneNumber />
          <LogoText />
          <YourQuestionLink />
        </Paper>
      </div>
    </div>
  );
};

export default MainInfoContainer;
