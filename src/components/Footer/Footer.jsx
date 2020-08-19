import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"© "}
      <Link color="inherit" href="#">
        wolshino
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh",
    justifyContent: "space-between",
  },

  footer: {
    padding: theme.spacing(3, 2),
    flexGrow: 1,
    marginTop: "auto",
    // alignItems: 'flex-start',
    justifyContent: "space-between",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  containerStyle: {
    justifyContent: "space-around",
    display: "flex",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <footer className={classes.footer}>
        <Container className={classes.containerStyle}>
          <Box component="div">
            <Typography variant="body1">
              Share with your friends
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </Typography>
          </Box>

          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
