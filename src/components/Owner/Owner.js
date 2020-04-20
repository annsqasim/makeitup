import React, { Component } from "react";
import { Grid, Container, Button } from "@material-ui/core";
import { OwnerWrap, OwnerDetails } from "./Owner.styled";
import Avatar from "../../assets/img/avatar.png";

class Owner extends Component {
  render() {
    return (
      <OwnerWrap>
        <Container>
          <Grid container>
            <Grid item lg={12}>
              <OwnerDetails>
                <img src={Avatar} alt="Avatar" />
                <p>Love @Username’s talent and their look?</p>
                <Button className="profile-btn">View Profile</Button>
                <Button className="contact-btn">Contact Talent</Button>
              </OwnerDetails>
            </Grid>
          </Grid>
        </Container>
      </OwnerWrap>
    );
  }
}

export default Owner;
