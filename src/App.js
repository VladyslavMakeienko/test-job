import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import StickyFooter from "./components/Footer/Footer";
import { Grid } from "@material-ui/core";
import NewsContainer from "./components/News/NewsContainer";
import AboutContainer from "./components/About/AboutContainer";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwiperPhotos from "./components/Slider/SwiperPhotos";
import HousesTypesContainer from "./components/Houses/HousesTypesContainer";
import GalleryContainer from "./components/Gallery/GalleryContainer";
import SliderContainer from "./components/Slider/SliderContainer";
import MainInfoContainer from "./components/MainInfo/MainInfoContainer";

const useStyles = makeStyles({
  allStyle: {
    display: "flex",
    flexDirection: "column",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid container className={classes.allStyle}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Switch>
          <Route path="/about" render={() => <AboutContainer />} />
          <Route path="/projects" render={() => <SwiperPhotos />} />
          <Route path="/gallery" render={() => <GalleryContainer />} />
          <Route path="/houses" render={() => <HousesTypesContainer />} />
        </Switch>
        <MainInfoContainer />
        {/* <SwiperPhotos /> */}
        {/* <SliderContainer /> */}
        <HousesTypesContainer />
        <AboutContainer />
        <NewsContainer />
        <GalleryContainer />
      </Grid>
      <StickyFooter />
    </Grid>
  );
}

export default App;
