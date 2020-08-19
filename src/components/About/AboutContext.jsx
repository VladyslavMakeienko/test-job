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
    // width: '100%',
    // position: 'absolute',
    // zIndex: 1,
    // left: 0,
    // backgroundSize: "100% 100%",
    // flexBasis: '100%',
    flexGrow: 1,
    width: '100%',
    marginTop: "100px",
    display: 'flex'
  },
  newsText: {
    textTransform: "uppercase",
    paddingTop: "10%",
    justifyContent: "center",
    color: "#fff",
  },
  positionText: {
    justifyContent: "center",
    display: "flex",
  },
  borderStyle: {
    border: "10px solid white",
    padding: "10px 20px",
    width: "50%",
    display: "flex",
    float: "center",
    height: "300px",
    margin: "200px",
    alignItems: "center",
  },
  textStyle: {
    justifyContent: "center",
    padding: "10px",
    color: "#fff",
  },
  linkStyle: {
    color: "#fff",
  },
  linkText: {
    border: "1px solid white",
    borderRadius: "80px",
    width: "120px",
    textTransform: "uppercase",
    padding: "10px",
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
