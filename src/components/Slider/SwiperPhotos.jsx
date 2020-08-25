import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ArrowRight from "../images/ArrowRight.jpg";
import ArrowLeft from "../images/ArrowLeft.jpg";
import ImageForSlider from "./ImageForSlider";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: `https://lh3.googleusercontent.com/proxy/7Ks5TSiNGPcN-GC1qQEh6n8ttwib06-QPWz8UK0J5f6AlVag4qwvEvQB7kl6TrRDPiUpBDVO0fadc35vvuphlZ2oNUXADg96O7hW_DR--jfuJtFt`,
  },
  {
    imgPath: `https://lh3.googleusercontent.com/proxy/2iH-xs09UVCAyarIifbH4SIP8JIUfWc6vDcwbTYpwVg7PBvSTPjOTmtpdQYF1UL48UJs5vxxYs-zj2yqSPFPN4d6uFE7BAG4noWUka9uUwQaGHrDCqiAd_-MAY1NyURnxQ`,
  },
  {
    imgPath:
      "https://www.remontbp.com/wp-content/uploads/2017/12/%D0%B7%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9-%D0%B4%D0%BE%D0%BC-%D0%B8%D0%B7-%D0%B1%D1%80%D1%83%D1%81%D0%B0.jpg",
  },
  {
    imgPath: `https://i.pinimg.com/originals/1d/07/82/1d07823aa36c5d1f08946d27b83cecae.jpg`,
  },
  {
    imgPath: `https://goldwyn.ru/images/pages/blog/novosti/20jun/chastdom.jpeg`,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    alignItems: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
  },
  arrowStyle: {
    display: "flex",
    height: "25px",
    width: "40px",
    backgroundColor: "white",
    justifyContent: "center",
  },
  clickBackground: {
    display: "flex",
    padding: "8px",
    background: "#fafafa",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
}));

const SwiperPhotos = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* тут идет нумерация картинок */}
      <MobileStepper
        className={classes.clickBackground}
        position="static"
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <img src={ArrowLeft} className={classes.arrowStyle} />
            ) : (
              <img src={ArrowRight} className={classes.arrowStyle} />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <img src={ArrowRight} className={classes.arrowStyle} />
            ) : (
              <img src={ArrowLeft} className={classes.arrowStyle} />
            )}
          </Button>
        }
      />
    </div>
  );
};

export default SwiperPhotos;
