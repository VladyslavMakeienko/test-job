import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Grid, Paper } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  numberStyle: {
    color: "green",
    display: "flex",
    "@media(max-width: 600px)": {
      display: "flex",
      fontSize: "10px",
    },
  },
  paperStyle: {
    height: "200px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexGrow: 1,

    // flexWrap: 'wrap'
  },
  logoText: {
    color: "grey",
    display: "flex",
    margin: "100px",
    "@media(max-width: 600px)": {
      display: "flex",
      width: "20px",
      fontSize: "15px",
      marginRight: "170px",
    },
  },
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
  someStyle: {
    display: "flex",
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  mainInfo: {
    "@media(max-width: 600px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "300px",
    },
  },
  positionElements: {
    "@media(max-width: 600px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "80px",
      margin: "30px",
    },
  },
}));

// "@media(max-width: 600px)": {
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "300px",
// },

const NewMainInfo = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  // const mainInfo = useMediaQuery('(max-width:600px)');
  const number = `+2 495 134-27-72`;
  return (
    <div className={classes.mainInfo}>
      <div className={classes.someStyle}>
        <Paper className={classes.paperStyle}>
          <div className={classes.positionElements}>
            <Typography className={classes.numberStyle}>{number}</Typography>
          </div>
          <div className={classes.positionElements}>
            <Typography variant="h5" className={classes.logoText}>
              wolshino.com
            </Typography>
          </div>
          <Link
            href="#"
            onClick={preventDefault}
            color="inherit"
            underline="none"
          >
            <div className={classes.positionElements}>
              <div className={classes.questionStyle}>
                <Typography className={classes.questionTextStyle}>
                  Your Question
                </Typography>
              </div>
            </div>
          </Link>
        </Paper>
      </div>
    </div>
  );
};

export default NewMainInfo;
