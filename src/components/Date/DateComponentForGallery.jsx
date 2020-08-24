import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dateStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    color: "white",
    padding: "0 0 0 15px",
  },
  titleDate: {
    fontSize: 50,
    padding: "0 0 0 15px",
    justifyContent: "center",
    display: "flex",
  },
  titleMonth: {
    textTransform: "uppercase",
    padding: "1px",
    display: "flex",
    flexDirection: "column",
  },
  titleYear: {
    padding: "1px",
    display: "flex",
    flexDirection: "column",
  },
}));

const DateComponentForGallery = () => {
  const classes = useStyles();
  return (
    <div className={classes.dateStyle}>
      <span className={classes.titleDate}> {new Date().getDate()} </span>
      <div>
        <span className={classes.titleMonth}>
          {new Date().toLocaleString("en", { month: "long" })}{" "}
        </span>
        <span className={classes.titleYear}>{new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default DateComponentForGallery;
