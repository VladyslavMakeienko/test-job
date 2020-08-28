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

const useStyles = makeStyles((theme) => ({
  carouselStyle: {
    display: "flex",
    // maxWidth: '1440px'
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
    maxWidth: "1400px",
  },
}));

const SliderContainer = (props) => {
  const classes = useStyles();
  const [changeArr, setChange] = React.useState({
    value: 0,
  });
  const onChange = (event) => {
    setChange({ value: event.target ? event.target.value : event });
  };
  return (
    <div className={classes.containerStyle}>
      <Carousel
        className={classes.carouselStyle}
        arrows
        slidesPerPage={3}
        animationSpeed={1500}
        autoPlay={3000}
        infinite
        plugins={[
          "centered",
          "arrows",
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 1,
            },
          },
        ]}
        breakpoints={{
          640: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          900: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
        }}
      >
        <img
          className={classes.imageStyle}
          src={`https://v.img.com.ua/b/orig/d/97/c2d59aca8263044a722bcd1328d0497d.jpg`}
        />
        <img
          className={classes.imageStyle}
          src={`https://v.img.com.ua/b/orig/d/97/c2d59aca8263044a722bcd1328d0497d.jpg`}
        />
        <img
          className={classes.imageStyle}
          src={`https://v.img.com.ua/b/orig/d/97/c2d59aca8263044a722bcd1328d0497d.jpg`}
        />
      </Carousel>
    </div>
  );
};

export default SliderContainer;
