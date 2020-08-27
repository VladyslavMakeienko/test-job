import React, { useEffect, useState } from "react";
import HousesCard from "./HousesCard";
import { Grid } from "@material-ui/core";
import NewsContainer from "./NewsContainer";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { loadNews } from "../../services/NewsAPI";

const useStyles = makeStyles({
  componentStyle: {
    display: "flex",
    flexGrow: 1,
    height: "400px",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#e9e9e9",
  },
  newsText: {
    textTransform: "uppercase",
    paddingTop: "10%",
  },
  positionText: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  imgStyleFirst: {
    height: "20px",
    width: "200px",
    marginRight: "40px",
  },
  imgStyleSecond: {
    height: "20px",
    width: "200px",
    marginLeft: "40px",
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
  },
  gridItemStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexGrow: 1,
  },
});

const Content = () => {
  const classes = useStyles();
  const [news, setNews] = useState([]);
  useEffect(() => {
    loadNews().then((loadedNews) => setNews(loadedNews));
  }, []);
  return (
    <Grid container>
      <Grid item xs={6} sm={12}>
        <Paper className={classes.componentStyle}>
          <span className={classes.positionText}>
            <Typography className={classes.newsText} variant="h3">
              <img
                src="https://img.icons8.com/ios/452/wavy-line.png"
                className={classes.imgStyleFirst}
              />
              News
              <img
                src="https://img.icons8.com/ios/452/wavy-line.png"
                className={classes.imgStyleSecond}
              />
            </Typography>
          </span>
          <Grid container className={classes.gridContainerStyle}>
            <Grid item xs={12} sm={4} className={classes.gridItemStyle}>
              <HousesCard />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Content;
