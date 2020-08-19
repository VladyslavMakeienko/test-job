import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  componentStyle: {
    backgroundColor: "silver",

    height: "500px",
    margin: "100px",
  },
  newsText: {
    textTransform: "uppercase",
    paddingTop: "10%",
  },
  positionText: {
    justifyContent: "center",
    display: "flex",
  },
  imgStyleFirst: {
    height: "20px",
    width: "200px",
    marginRight: "40px",
  },
  imgStyleSecond: {
    height: "20px",
    width: "200px",
    marginLeft: "40px",
  },
});

const NewsContainer = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.componentStyle}>
          <Box component="span" className={classes.positionText}>
            <Typography className={classes.newsText} variant="h3">
              <Box
                component="img"
                src="https://img.icons8.com/ios/452/wavy-line.png"
                className={classes.imgStyleFirst}
              />
              News
              <Box
                component="img"
                src="https://img.icons8.com/ios/452/wavy-line.png"
                className={classes.imgStyleSecond}
              />
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NewsContainer;