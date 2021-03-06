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
  },
  media: {
    height: 200,
    display: "flex",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
    backgroundSize: "contain",
  },
  titleStyle: {
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "center",
  },
  textStyle: {
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      display: "none",
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
