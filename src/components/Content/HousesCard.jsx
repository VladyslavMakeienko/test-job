import React from "react";
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

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  titleDate: {
    fontSize: 25,
    padding: "15px",
    justifyContent: "center",
  },
  titleMonth: {
    textTransform: "uppercase",
    padding: "3px",
    justifyContent: "center",
  },
  titleYear: {
    padding: "15px",
    justifyContent: "center",
  },
  pos: {
    marginBottom: 12,
  },
  dateStyle: {
    display: "block",
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
    webkitClipPath:
      "polygon(0 0,100% 0,100% 100%,calc(50% + 10px) 100%,50% calc(100% - 10px),calc(50% - 10px) 100%,0 100%)",
    clipPath:
      "polygon(0 0,100% 0,100% 100%,calc(50% + 6px) 100%,50% calc(100% - 6px),calc(50% - 6px) 100%,0 100%)",
  },
});

function HousesCard(props) {
  const classes = useStyles();
  const { title, imgSrc } = props;
  return (
    <Card>
      <CardContent className={classes.root}>
        <CardMedia
          image={imgSrc}
          style={{ height: "150px" }}
          className={classes.imgStyle}
        >
          {" "}
          <Typography color="textSecondary" gutterBottom>
            <Box component="div" className={classes.dateStyle}>
              <Box component="span" className={classes.titleDate}>
                {" "}
                {new Date().getDate()}{" "}
              </Box>
              <Box component="span" className={classes.titleMonth}>
                {new Date().toLocaleString("en", { month: "long" })}{" "}
              </Box>
              <Box component="span" className={classes.titleYear}>
                {new Date().getFullYear()}
              </Box>
            </Box>
          </Typography>
        </CardMedia>
        <Typography variant="body2" component="p">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HousesCard;
