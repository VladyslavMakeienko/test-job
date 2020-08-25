import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
    title: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-around",
      textTransform: "uppercase",
      zIndex: "2",
      textAlign: "center",
      flexGrow: 1,
    },
  
}));

const MainInfo = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        <Box
          component="div"
          style={{
            margin: "5% 40% 0 0",
            border: "1px solid green",
            padding: "10px 20px",
            borderRadius: "100px",
            width: "15%",
            color: "green",
          }}
        >
          +2 495 134-27-72
        </Box>
        <Box component="span">Wolshino.com</Box>
        <Box component="p">summary resort</Box>
        <Link
          href="#"
          onClick={preventDefault}
          color="inherit"
          underline="none"
        >
          <Box
            component="div"
            style={{
              border: "1px solid green",
              padding: "10px 20px",
              borderRadius: "100px",
              textTransform: "uppercase",
              width: "10%",
              marginLeft: "70%",
              color: "green",
            }}
          >
            Your Question
          </Box>
        </Link>
      </Typography>
    </div>
  );
};

export default MainInfo;
