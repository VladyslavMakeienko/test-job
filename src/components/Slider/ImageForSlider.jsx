import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import imageForSlider from "../images/imageForSlider.jpg";

const useStyles = makeStyles(() => ({
  imageBackgroundStyle: {
    backgroundImage: `url(${imageForSlider})`,
  },
}));

const ImageForSlider = () => {
  const classes = useStyles();
  const image = imageForSlider;
  return (
    <div>
      <img
        src={`https://www.remontbp.com/wp-content/uploads/2017/12/%D0%B7%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9-%D0%B4%D0%BE%D0%BC-%D0%B8%D0%B7-%D0%B1%D1%80%D1%83%D1%81%D0%B0.jpg`}
        alt="Image"
      />
    </div>
  );
};

export default ImageForSlider;
