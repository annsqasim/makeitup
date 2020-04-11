import React from "react";
import { Grid, Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import UploadIcon from "../../assets/Icons/UploadIcon";

import { NavBar } from "./Header.styled";

export default function TopBar() {
  const handleProfileMenuOpen = () => {};

  return (
    <NavBar position="sticky">
      <Container maxWidth="lg">
        <Grid container justify="space-between" alignItems="center">
          <Typography>Logo</Typography>
          <div>
            <Button variant="text" startIcon={<UploadIcon />}>
              Upload
            </Button>
          </div>
          <div>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
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
          </div>
        </Grid>
      </Container>
    </NavBar>
  );
}
