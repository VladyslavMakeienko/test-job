import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import { galleryFirst } from "../images/galleryFirst.jpg";
import { gallerySecond } from "../images/gallerySecond.jpg";
import { galleryThird } from "../images/galleryThird.jpg";
import Box from "@material-ui/core/Box";
import axios from "axios";
import CardActionArea from "@material-ui/core/CardActionArea";
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
});

function HousesCard(props) {
  const classes = useStyles();
  const { title, imgSrc, date } = props;
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews().then((loadedNews) => setNews(loadedNews));
  }, []);

  return (
    <Card>
      <CardActionArea>
        <CardContent className={classes.root}>
          <CardMedia
            image={imgSrc}
            style={{ height: "150px" }}
            className={classes.imgStyle}
          >
            {" "}
            <Typography color="textSecondary" gutterBottom>
              <div className={classes.dateStyle}>{date}</div>
            </Typography>
          </CardMedia>
          <Typography variant="body2" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default HousesCard;
