import React from "react";
import HousesCard from "./HousesCard";
import { Grid } from "@material-ui/core";
import { galleryFirst } from "../images/galleryFirst.jpg";
import NewsContainer from "./NewsContainer";

const Content = () => {
  return (
    <Grid container spacing={5}>
      <NewsContainer />
      <Grid item xs={12} sm={4}>
          <HousesCard
            title={` Where the Russians were resting in the summer of 
          ${new Date().getFullYear()}`}
            imgSrc={
              "https://i.pinimg.com/originals/6e/c1/97/6ec197b0cb9d4e610e494e30e8fe3e0d.jpg"
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <HousesCard
            title={` Where the Russians were resting in the summer of 
          ${new Date().getFullYear()}`}
            imgSrc={
              "https://log-house.ru/wp-content/uploads/2019/09/Dom-359_1-7.jpg"
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <HousesCard
            title={` Where the Russians were resting in the summer of 
          ${new Date().getFullYear()}`}
            imgSrc={
              "https://www.dl-chem.com/sites/default/files/styles/infoblok555x360/public/IMG-20150626-WA0008_0.jpg?itok=Pvn2LqNu"
            }
          />
      </Grid>
    </Grid>
  );
};

export default Content;
