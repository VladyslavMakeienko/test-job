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
  },
  someStyle: {
    display: "flex",
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  mainInfo: {
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      minWidth: "320px",
      maxWidth: "480px",
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
