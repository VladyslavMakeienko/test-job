import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Box from "@material-ui/core/Box";

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
  },
  dateStyle: {
    display: "block",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "25%",
    marginLeft: "10%",
    justifyContent: "center",
  },
  titleDate: {
    fontSize: 25,
    padding: "15px",
    justifyContent: "center",
  },
  titleMonth: {
    textTransform: "uppercase",
    padding: "3px",
    justifyContent: "center",
  },
  titleYear: {
    padding: "15px",
    justifyContent: "center",
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

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        <Box component="div" className={classes.dateStyle}>
          <Box component="span" className={classes.titleDate}>
            {" "}
            {new Date().getDate()}{" "}
          </Box>
          <Box component="span" className={classes.titleMonth}>
            {new Date().toLocaleString("en", { month: "long" })}{" "}
          </Box>
          <Box component="span" className={classes.titleYear}>
            {new Date().getFullYear()}
          </Box>
        </Box>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <Box component="img" src={tile.img} alt={tile.title}></Box>
            {/* <img ></img> */}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
