import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import StickyFooter from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import GalleryPhotos from "./components/Gallery/GalleryPhotos";
import { Grid } from "@material-ui/core";
import Content from "./components/Content/Content";
import AboutContext from "./components/About/AboutContext";
import { Route, Switch } from "react-router-dom";
import NewHeader from "./components/Header/NewHeader";

function App() {
  return (
    <Grid container direction="row">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
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
          <AboutContext />
          <Content />
          <GalleryPhotos />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
      <StickyFooter />
    </Grid>
  );
}

export default App;
