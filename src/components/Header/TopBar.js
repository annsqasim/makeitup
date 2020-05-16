import React from "react";
import { Grid, Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import UploadIcon from "../../assets/Icons/UploadIcon";
import HeartIcon from "../../assets/Icons/HeartIcon";
import Login from "../Login";
import { makeStyles } from "@material-ui/core/styles";

import { NavBar, JoinButton } from "./Header.styled";

export default function TopBar(props) {
  const handleProfileMenuOpen = () => {};
  const useStyles = makeStyles(() => ({
    input: {
      display: "none",
    },
  }));

  const [open, setOpen] = React.useState(false);
  const [isLoggedin, setisLoggedin] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <NavBar position="sticky">
      <Container maxWidth="lg">
        <Grid container justify="space-between" alignItems="center">
          <Button variant="text" href="/">
            Logo
          </Button>
          <div>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="text"
                component="span"
                startIcon={<UploadIcon />}
              >
                Upload
              </Button>
            </label>
          </div>
          {isLoggedin ? (
            <div>
              <IconButton
                onClick={handleOpen}
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Login open={open} handleClose={handleClose} />
            </div>
          ) : (
            <div>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge color="secondary">
                  <HeartIcon width={16} color="#000" />
                </Badge>
              </IconButton>
              <Button variant="text" onClick={handleOpen}>
                Login
              </Button>
              <JoinButton href="/register">Join Free</JoinButton>
              <Login open={open} handleClose={handleClose} {...props} />
            </div>
          )}
        </Grid>
      </Container>
    </NavBar>
  );
}
