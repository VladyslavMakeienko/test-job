import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from "./tileData";
import { galleryFirst } from "../images/galleryFirst.jpg";
import { gallerySecond } from "../images/gallerySecond.jpg";
import { galleryThird } from "../images/galleryThird.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));

const tileData = [
  {
    img:
      "https://i.pinimg.com/originals/6e/c1/97/6ec197b0cb9d4e610e494e30e8fe3e0d.jpg",
    title: "Image",
    author: "author",
    featured: true,
  },
  {
    img: "https://log-house.ru/wp-content/uploads/2019/09/Dom-359_1-7.jpg",
    title: "Image",
    author: "author",
    featured: true,
  },
  {
    img:
      "https://www.dl-chem.com/sites/default/files/styles/infoblok555x360/public/IMG-20150626-WA0008_0.jpg?itok=Pvn2LqNu",
    title: "Image",
    author: "author",
    featured: true,
  },
];

export default function AdvancedGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={200}
        spacing={1}
        className={classes.gridList}
        cols={2}
      >
        {tileData.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${tile.title}`}
                  className={classes.icon}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
