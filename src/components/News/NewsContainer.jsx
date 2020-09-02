import React from "react";
import NewsCards from "./NewsCards";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import NewsTitle from "./NewsTitle";

const useStyles = makeStyles({
  componentStyle: {
    display: "flex",
    flexGrow: 1,
    height: "400px",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#e9e9e9",

    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      height: "800px",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#e9e9e9",
      minWidth: "320px",
      maxWidth: "480px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      height: "800px",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#e9e9e9",
      minWidth: "481px",
      maxWidth: "768px",
    },
  },
  cardStyle: {
    display: "flex",
    flexDirection: "row",
  },
  gridContainerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1,

    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  gridItemStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1,

    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
});

/* News Раздел */

const NewsContainer = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.componentStyle}>
          <NewsTitle />
          <Grid container className={classes.gridContainerStyle}>
            <Grid item xs={12} sm={12} md={4} className={classes.gridItemStyle}>
              <NewsCards />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NewsContainer;
