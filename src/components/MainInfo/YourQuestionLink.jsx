import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(() => ({
  questionStyle: {
    display: "flex",
    border: "1px solid green",
    padding: "10px",
    borderRadius: "100px",
    textTransform: "uppercase",
    color: "green",
    boxSizing: "content-box",
    width: "150px",
    justifyContent: "center",

    "@media(max-width: 600px)": {
      display: "flex",
      width: "60px",
      fontSize: "15px",
      marginRight: "15px",
    },
  },
  questionTextStyle: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",

    "@media(max-width: 600px)": {
      display: "flex",
      width: "20px",
      fontSize: "10px",
    },
  },
  positionElements: {
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "95px",
      margin: "20px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "150px",
      margin: "30px",
    },
  },
}));

/* Your Question Link */

const YourQuestionLink = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const textQuestion = `Your Question`;
  return (
    <Link href="#" onClick={preventDefault} color="inherit" underline="none">
      <div className={classes.positionElements}>
        <div className={classes.questionStyle}>
          <Typography className={classes.questionTextStyle}>
            {textQuestion}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default YourQuestionLink;
