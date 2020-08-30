import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Grid } from "@material-ui/core";
import { loadNews } from "../../services/NewsAPI";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
    webkitDisplay: "inline-block",
    webkitMargin: "0 2px",
    webkitTransform: "scale(0.8)",
    mozDisplay: "inline-block",
    mozMargin: "0 2px",
    mozTransform: "scale(0.8)",
    msDisplay: "inline-block",
    msMargin: "0 2px",
    msTransform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
    webkitMarginBottom: 12,
    mozMarginBottom: 12,
    msMarginBottom: 12,
  },
  dateStyle: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "25%",
    marginLeft: "10%",
    justifyContent: "center",
    webkitDisplay: "flex",
    webkitFlexDirection: "column",
    webkitBackgroundColor: "#fff",
    webkitWidth: "25%",
    webkitMarginLeft: "10%",
    webkitJustifyContent: "center",
    mozDisplay: "flex",
    mozFlexDirection: "column",
    mozBackgroundColor: "#fff",
    mozWidth: "25%",
    mozMarginLeft: "10%",
    mozJustifyContent: "center",
    msDisplay: "flex",
    msFlexDirection: "column",
    msBackgroundColor: "#fff",
    msWidth: "25%",
    msMarginLeft: "10%",
    msJustifyContent: "center",
  },
  root: {
    padding: "0",
    webkitPadding: "0",
    mozPadding: "0",
    msPadding: "0",
  },
  imgStyle: {
    webkitClipPath: `polygon(0 0,100% 0,100% 100%,calc(50% + 10px) 100%,50% calc(100% - 10px),calc(50% - 10px) 100%,0 100%)`,
    clipPath: `polygon(0 0,100% 0,100% 100%,calc(50% + 6px) 100%,50% calc(100% - 6px),calc(50% - 6px) 100%,0 100%)`,
    mozClipPath: `polygon(0 0,100% 0,100% 100%,calc(50% + 6px) 100%,50% calc(100% - 6px),calc(50% - 6px) 100%,0 100%)`,
    msClipPath: `polygon(0 0,100% 0,100% 100%,calc(50% + 6px) 100%,50% calc(100% - 6px),calc(50% - 6px) 100%,0 100%)`,
  },
  containerStyle: {
    padding: "30px",
    webkitPadding: "30px",
    mozPadding: "30px",
    msPadding: "30px",
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      padding: "20px",
      webkitPadding: "20px",
      mozPadding: "20px",
      msPadding: "20px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      padding: "10px",
      webkitPadding: "10px",
      mozPadding: "10px",
      msPadding: "10px",
    },
  },
  itemStyle: {
    width: "250px",
    webkitWidth: "250px",
    mozWidth: "250px",
    msWidth: "250px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      width: "300px",
      height: "150px",
      webkitDisplay: "flex",
      webkitWidth: "300px",
      webkitHeight: "150px",
      mozDisplay: "flex",
      mozWidth: "300px",
      mozHeight: "150px",
      msDisplay: "flex",
      msWidth: "300px",
      msHeight: "150px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      width: "600px",
      height: "150px",
      webkitDisplay: "flex",
      webkitWidth: "600px",
      webkitHeight: "150px",
      mozDisplay: "flex",
      mozWidth: "600px",
      mozHeight: "150px",
      msDisplay: "flex",
      msWidth: "600px",
      msHeight: "150px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      display: "flex",
      width: "240px",
      height: "400px",
      webkitDisplay: "flex",
      webkitWidth: "240px",
      webkitHeight: "400px",
      mozDisplay: "flex",
      mozWidth: "240px",
      mozHeight: "400px",
      msDisplay: "flex",
      msWidth: "240px",
      msHeight: "400px",
    },
  },
});

/* News Card */

const NewsCards = (props) => {
  const classes = useStyles();
  const [news, setNews] = useState([]);
  useEffect(() => {
    loadNews().then((loadedNews) => setNews(loadedNews));
  }, []);
  const NewsInformation = news.map((item, index) =>
    index <= 2 ? (
      <Grid container className={classes.containerStyle}>
        <Grid item className={classes.itemStyle}>
          <div>
            <Card key={index}>
              <CardActionArea>
                <CardContent className={classes.root}>
                  <CardMedia
                    image={item.urlToImage}
                    style={{ height: "150px" }}
                    className={classes.imgStyle}
                  >
                    {" "}
                    <Typography color="textSecondary" gutterBottom>
                      <div className={classes.dateStyle}>
                        {item.publishedAt}
                      </div>
                    </Typography>
                  </CardMedia>
                  <Typography variant="body2">{item.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Grid>
      </Grid>
    ) : (
      ""
    )
  );
  return NewsInformation;
};

export default NewsCards;
