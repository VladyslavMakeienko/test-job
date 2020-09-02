import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Grid } from "@material-ui/core";
import moment from "moment";
import { loadNews } from "../../services/NewsAPI";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  dateStyle: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "25%",
    marginLeft: "10%",
    justifyContent: "center",
  },
  root: {
    padding: "0",
  },
  imgStyle: {
    webkitClipPath: `polygon(0 0,100% 0,100% 100%,calc(50% + 10px) 100%,50% calc(100% - 10px),calc(50% - 10px) 100%,0 100%)`,
    clipPath: `polygon(0 0,100% 0,100% 100%,calc(50% + 6px) 100%,50% calc(100% - 6px),calc(50% - 6px) 100%,0 100%)`,
  },
  titleStyle: {
    padding: "4px",
  },
  containerStyle: {
    padding: "40px",
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      padding: "20px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      padding: "10px",
    },
  },
  itemStyle: {
    width: "250px",

    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "flex",
      width: "300px",
      height: "150px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      display: "flex",
      width: "600px",
      height: "150px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      display: "flex",
      width: "240px",
      height: "400px",
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
      <Grid container className={classes.containerStyle} key={index}>
        <Grid item className={classes.itemStyle}>
          <div>
            <Card>
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
                        {moment(item.publishedAt).format("ll")}
                      </div>
                    </Typography>
                  </CardMedia>
                  <Typography variant="body2" className={classes.titleStyle}>
                    {item.title}
                  </Typography>
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
