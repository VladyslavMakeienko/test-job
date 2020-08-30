import React from "react";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";

/* Share With Your Friends and Social Network Icons */

const ShareWithYourFriends = () => {
  return (
    <div>
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
    </div>
  );
};

export default ShareWithYourFriends;
