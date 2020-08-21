import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import StickyFooter from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import NewGalleryPhotos from "./components/Gallery/NewGalleryPhotos";
import { Grid } from "@material-ui/core";
import Content from "./components/Content/Content";
import AboutContext from "./components/About/AboutContext";
import { Route, Switch } from "react-router-dom";
import NewHeader from "./components/Header/NewHeader";
import NewMainInfo from "./components/MainInfo/NewMainInfo";
import { makeStyles } from "@material-ui/core/styles";
import SwiperPhotos from "./components/Slider/SwiperPhotos";
import HousesTypesContainer from "./components/Houses/HousesTypesContainer";
import GalleryContainer from "./components/Gallery/GalleryContainer";

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
        {/* <Switch>
            <Route
              exact
              path="/about"
              render={(props) => <AboutContext {...props} />}
            />
            <Route path="/content" render={(props) => <Content {...props} />} />
            <Route
              path="/gallery"
              render={(props) => <GalleryPhotos {...props} />}
            />
            
            
          </Switch> */}
        <NewMainInfo />
        <SwiperPhotos />
        <HousesTypesContainer />
        <AboutContext />
        <Content />
        {/* <NewGalleryPhotos /> */}
        <GalleryContainer />
      </Grid>
      <StickyFooter />
    </Grid>
  );
}

export default App;
