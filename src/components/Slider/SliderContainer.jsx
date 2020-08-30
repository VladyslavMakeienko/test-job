import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
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
    webkitDisplay: "flex",
    webkitBackgroundColor: "#fff",
    webkitMaxWidth: "2560px",
    mozDisplay: "flex",
    mozBackgroundColor: "#fff",
    mozMaxWidth: "2560px",
    msDisplay: "flex",
    msBackgroundColor: "#fff",
    msMaxWidth: "2560px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      minWidth: "320px",
      maxWidth: "480px",
      webkitMinWidth: "320px",
      webkitMaxWidth: "480px",
      mozMinWidth: "320px",
      mozMaxWidth: "480px",
      msMinWidth: "320px",
      msMaxWidth: "480px",
    },
    "@media only screen and (min-width: 481px) and (max-width: 768px)": {
      minWidth: "481px",
      maxWidth: "768px",
      webkitMinWidth: "481px",
      webkitMaxWidth: "768px",
      mozMinWidth: "481px",
      mozMaxWidth: "768px",
      msMinWidth: "481px",
      msMaxWidth: "768px",
    },
    "@media only screen and (min-width: 769px) and (max-width: 827px)": {
      maxWidth: "800px",
      webkitMaxWidth: "800px",
      mozMaxWidth: "800px",
      msMaxWidth: "800px",
    },
    "@media only screen and (min-width: 828px) and (max-width: 1024px)": {
      minWidth: "828px",
      maxWidth: "1024px",
      webkitMinWidth: "828px",
      webkitMaxWidth: "1024px",
      mozMinWidth: "828px",
      mozMaxWidth: "1024px",
      msMinWidth: "828px",
      msMaxWidth: "1024px",
    },
    "@media only screen and (min-width: 1025px) and (max-width: 1440px)": {
      minWidth: "1025px",
      maxWidth: "1440px",
      webkitMinWidth: "1025px",
      webkitMaxWidth: "1440px",
      mozMinWidth: "1025px",
      mozMaxWidth: "1440px",
      msMinWidth: "1025px",
      msMaxWidth: "1440px",
    },
    "@media only screen and (min-width: 1441px) and (max-width: 1519px)": {
      minWidth: "1441px",
      maxWidth: "1519px",
      webkitMinWidth: "1441px",
      webkitMaxWidth: "1519px",
      mozMinWidth: "1441px",
      mozMaxWidth: "1519px",
      msMinWidth: "1441px",
      msMaxWidth: "1519px",
    },
    "@media only screen and (min-width: 1520px) and (max-width: 1720px)": {
      minWidth: " 1520px",
      maxWidth: "1720px",
      webkitMinWidth: " 1520px",
      webkitMaxWidth: "1720px",
      mozMinWidth: " 1520px",
      mozMaxWidth: "1720px",
      msMinWidth: " 1520px",
      msMaxWidth: "1720px",
    },
    "@media only screen and (min-width: 1721px) and (max-width: 1920px)": {
      minWidth: " 1721px",
      maxWidth: "1920px",
      webkitMinWidth: " 1721px",
      webkitMaxWidth: "1920px",
      mozMinWidth: " 1721px",
      mozMaxWidth: "1920px",
      msMinWidth: " 1721px",
      msMaxWidth: "1920px",
    },
    "@media only screen and (min-width: 1921px) and (max-width: 2120px)": {
      minWidth: "1921px",
      maxWidth: "2120px",
      webkitMinWidth: "1921px",
      webkitMaxWidth: "2120px",
      mozMinWidth: "1921px",
      mozMaxWidth: "2120px",
      msMinWidth: "1921px",
      msMaxWidth: "2120px",
    },
  },
  imageStyle: {
    display: "flex",
    webkitDisplay: "flex",
    mozDisplay: "flex",
    msDisplay: "flex",
  },
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row",
    alignContent: "center",
    textAlign: "center",
    webkitDisplay: "flex",
    webkitJustifyContent: "center",
    webkitFlexFlow: "row",
    webkitAlignContent: "center",
    webkitTextAlign: "center",
    mozDisplay: "flex",
    mozJustifyContent: "center",
    mozFlexFlow: "row",
    mozAlignContent: "center",
    mozTextAlign: "center",
    msDisplay: "flex",
    msJustifyContent: "center",
    msFlexFlow: "row",
    msAlignContent: "center",
    msTextAlign: "center",
  },
}));

/* Slider раздел */

const SliderContainer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.containerStyle}>
      <Carousel
        className={classes.carouselStyle}
        arrows
        // centered
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
