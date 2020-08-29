import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import House from "../images/HOUSE.png";

const useStyles = makeStyles(() => ({
  imageHouseStyle: {
    display: "flex",
    height: "300px",
    position: "relative",
  },
  textProject: {
    display: "flex",
    width: "100%",
    position: "absolute",
    left: "150px",
    bottom: "150px",
    textTransform: "uppercase",
    color: "#fff",
    fontSize: "30px",
  },
  linkStyle: {
    color: "white",
  },
  linkText: {
    border: "1px solid white",
    borderRadius: "80px",
    width: "140px",
    textTransform: "uppercase",
    padding: "7px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0  35% 0 35%",
    alignItems: "center",
    position: "absolute",
    bottom: "80px",
    "@media only screen and (min-width: 320px) and (max-width: 480px)": {
      margin: "0 20% 0 20%",
    },
  },
}));

const ImageForSlider = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const textProject = `Veil Project`;
  const textLink = `Join`;
  return (
    <div>
      <div>
        <img src={House} alt="House" className={classes.imageHouseStyle} />
        <div className={classes.textProject}>{textProject}</div>
        <Link
          href="#"
          onClick={preventDefault}
          className={classes.linkStyle}
          underline="none"
        >
          <div className={classes.linkText}>{textLink}</div>
        </Link>
      </div>
    </div>
  );
};

export default ImageForSlider;
