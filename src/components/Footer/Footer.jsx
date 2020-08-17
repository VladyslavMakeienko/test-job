import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"© "}
      <Link color="inherit" href="https://material-ui.com/">
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
  },
  main: {
    marginLeft:  theme.spacing(8), 
  },
  footer: {
    padding: theme.spacing(3, 2),
    flexBasis: '100%',
    marginTop: "auto",
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <footer className={classes.footer}>
        <Container>
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
            <Copyright />
          </Typography>
          
        </Container>
      </footer>
    </div>
  );
}
