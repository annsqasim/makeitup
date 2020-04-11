import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import { FeaturedSection, LinkBtn } from "./Featured.styled";
import FeaturedImg from "../../assets/img/starofmonth.png";

export default class Featured extends Component {
  render() {
    return (
      <FeaturedSection>
        <Container>
          <Grid container className="wrap">
            <Grid item lg={6}>
              <img src={FeaturedImg} alt="Star" />
            </Grid>
            <Grid item lg={6}>
              <div className="featured-info">
                <h1>Meet Aisha</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <LinkBtn>Watch Videos</LinkBtn>
              </div>
            </Grid>
          </Grid>
        </Container>
      </FeaturedSection>
    );
  }
}
