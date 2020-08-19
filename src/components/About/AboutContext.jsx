import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  componentStyle: {
    backgroundImage:
      "url(https://log-house.ru/wp-content/uploads/2019/09/Dom-359_1-7.jpg)",
    flexGrow: 1,
    // marginTop: "100px",
    display: "flex",
    backgroundRepeat: "no-repeat",
  },
  newsText: {
    textTransform: "uppercase",
    paddingTop: "10%",
    justifyContent: "center",
    color: "#fff",
    display: "flex",
  },
  positionText: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  borderStyle: {
    border: "10px solid white",
    padding: "3%",
    width: "70%",
    display: "flex",
    height: "300px",
    margin: "70px",
    alignItems: "center",
    flexDirection: "column",
  },
  textStyle: {
    justifyContent: "center",
    padding: "10px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  linkStyle: {
    color: "#fff",
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
  },
});

const AboutContext = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.componentStyle}>
          <Box component="div" className={classes.borderStyle}>
            <Box component="span" className={classes.positionText}>
              <Typography variant="h3" className={classes.newsText}>
                About
              </Typography>
              <Box component="div" className={classes.textStyle}>
                <Typography variant="p" className={classes.textStyle}>
                  New summer resort ... "It does not happen!" - You say - "Or is{" "}
                </Typography>
              </Box>
              <Link
                href="#"
                onClick={preventDefault}
                className={classes.linkStyle}
                underline="none"
              >
                <Box component="div" className={classes.linkText}>
                  All Information
                </Box>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AboutContext;
