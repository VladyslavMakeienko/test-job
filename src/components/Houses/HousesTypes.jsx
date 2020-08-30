import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
    webkitMaxWidth: 270,
    mozMaxWidth: 270,
    msMaxWidth: 270,
  },
  media: {
    height: 200,
    display: "flex",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
    webkitHeight: 200,
    webkitDisplay: "flex",
    webkitMaxWidth: 400,
    webkitOverflow: "hidden",
    webkitWidth: "100%",
    mozHeight: 200,
    mozDisplay: "flex",
    mozMaxWidth: 400,
    mozOverflow: "hidden",
    mozWidth: "100%",
    msHeight: 200,
    msDisplay: "flex",
    msMaxWidth: 400,
    msOverflow: "hidden",
    msWidth: "100%",
  },
  titleStyle: {
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "center",
    webkitTextTransform: "uppercase",
    webkitDisplay: "flex",
    webkitJustifyContent: "center",
    mozTextTransform: "uppercase",
    mozDisplay: "flex",
    mozJustifyContent: "center",
    msTextTransform: "uppercase",
    msDisplay: "flex",
    msJustifyContent: "center",
  },
  textStyle: {
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "none",
      webkitDisplay: "none",
      mozDisplay: "none",
      msDisplay: "none",
    },
  },
});

/* House Card */

const HousesTypes = (props) => {
  const classes = useStyles();
  const { title, imgSrc } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title={title}
          alt="House"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.titleStyle}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.textStyle}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HousesTypes;
