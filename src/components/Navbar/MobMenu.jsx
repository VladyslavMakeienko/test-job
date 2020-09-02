import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

/* Маленькое/Мобильное меню шапки */

const MobMenu = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
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
            <MenuItem onClick={() => handleMenuClick(pageURL)} key={menuTitle}>
              {menuTitle}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default withRouter(MobMenu);
