import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  numberStyle: {
    color: "green",
    padding: "70px",
    display: "flex",
  },
  paperStyle: {
    height: "200px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    // flexBasis: '100%',
    flexGrow: 1,
    // flexWrap: 'wrap'
  },
  logoText: {
    color: "grey",
    display: "flex",
    padding: "70px",
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
    margin: "30%",
    justifyContent: "center",
  },
  questionTextStyle: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  someStyle: {
    display: "flex",
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
}));

const NewMainInfo = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Grid container>
      <Grid item className={classes.someStyle}>
        <Paper className={classes.paperStyle}>
          <Grid item xs={4}>
            <Box component="div" className={classes.numberStyle}>
              <Typography>+2 495 134-27-72</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box component="div" className={classes.logoText}>
              <Typography variant="h5">wolshino.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Link
              href="#"
              onClick={preventDefault}
              color="inherit"
              underline="none"
            >
              <Box component="div" className={classes.questionStyle}>
                <Typography className={classes.questionTextStyle}>
                  Your Question
                </Typography>
              </Box>
            </Link>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NewMainInfo;
