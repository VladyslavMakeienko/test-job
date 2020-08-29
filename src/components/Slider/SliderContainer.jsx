import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin,
  slidesToShow,
  infinitePlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ImageForSlider from "./ImageForSlider";
import FrontOfTheHouse from "./ImageFrontOfTheHouse";
import BackOfTheHouse from "./ImageBackOfTheHouse";

const useStyles = makeStyles((theme) => ({
  carouselStyle: {
    display: "flex",
    backgroundColor: "#fff",
    maxWidth: "2560px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      minWidth: "320px",
      maxWidth: "480px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      minWidth: "481px",
      maxWidth: "768px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      maxWidth: "800px",
    },
    "@media only screen and (min-width: 828px) and (max-width: 1024px)": {
      minWidth: "828px",
      maxWidth: "1024px",
    },
    "@media only screen and (min-width: 1025px) and (max-width: 1440px)": {
      minWidth: "1025px",
      maxWidth: "1440px",
    },
    "@media only screen and (min-width: 1441px) and (max-width: 1519px)": {
      minWidth: "1441px",
      maxWidth: "1519px",
    },
    "@media only screen and (min-width: 1520px) and (max-width: 1720px)": {
      minWidth: " 1520px",
      maxWidth: "1720px",
    },
    "@media only screen and (min-width: 1721px) and (max-width: 1920px)": {
      minWidth: " 1721px",
      maxWidth: "1920px",
    },
    "@media only screen and (min-width: 1921px) and (max-width: 2120px)": {
      minWidth: "1921px",
      maxWidth: "2120px",
    },
  },
  imageStyle: {
    display: "flex",
  },
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row",
    alignContent: "center",
    textAlign: "center",
  },
}));

const SliderContainer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.containerStyle}>
      <Carousel
        className={classes.carouselStyle}
        arrows
        centered
        slidesPerPage={3}
        animationSpeed={1500}
        autoPlay={3000}
        infinite
        plugins={[
          // "centered",
          // "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
      >
        <BackOfTheHouse />
        <ImageForSlider />
        <FrontOfTheHouse />
      </Carousel>
    </div>
  );
};

export default SliderContainer;
