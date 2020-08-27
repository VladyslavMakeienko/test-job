import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Gallery from "../Gallery/Gallery";
import GeneralPlan from "../GeneralPlan/GeneralPlan";
import Houses from "../Houses/Houses";
import Location from "../Location/Location";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  styleAppBar: {
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    margin: "0, 100px, 0, 100px",
  },
  textStyle: {
    color: "grey",
    textTransform: "uppercase",
    display: "flex",
    margin: "10px",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  headerOptions: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
}));

const Navbar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "About",
      pageURL: "/about",
    },
    {
      menuTitle: "Projects",
      pageURL: "/projects",
    },
    {
      menuTitle: "Gallery",
      pageURL: "/gallery",
    },
    {
      menuTitle: "Houses",
      pageURL: "/houses",
    },
    {
      menuTitle: "General Plan",
      pageURL: "#",
    },
    {
      menuTitle: "Location",
      pageURL: "#",
    },
  ];
  return (
    <AppBar position="static">
      <Toolbar className={classes.styleAppBar}>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="black"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              {menuItems.map((menuItem) => {
                const { menuTitle, pageURL } = menuItem;
                return (
                  <MenuItem onClick={() => handleMenuClick(pageURL)}>
                    {menuTitle}
                  </MenuItem>
                );
              })}
            </Menu>
          </>
        ) : (
          <div className={classes.headerOptions}>
            <div>
              <Typography
                className={classes.textStyle}
                onClick={() => handleButtonClick("/about")}
              >
                <About />
              </Typography>
            </div>
            <div>
              <Typography
                onClick={() => handleButtonClick("/projects")}
                className={classes.textStyle}
              >
                <Projects />
              </Typography>
            </div>
            <div>
              <Typography
                className={classes.textStyle}
                onClick={() => handleButtonClick("/gallery")}
              >
                <Gallery />
              </Typography>
            </div>
            <div>
              <Typography
                className={classes.textStyle}
                onClick={() => handleButtonClick("/houses")}
              >
                <Houses />
              </Typography>
            </div>
            <div>
              <Typography
                className={classes.textStyle}
                onClick={() => handleButtonClick("#")}
              >
                <GeneralPlan />
              </Typography>
            </div>
            <div>
              <Typography
                className={classes.textStyle}
                onClick={() => handleButtonClick("#")}
              >
                <Location />
              </Typography>
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
