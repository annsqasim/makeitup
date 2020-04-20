import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { HeroSection } from "../Header/Header.styled";
import HeroImage from "../../assets/img/Hero.png";
import { HeroHeading, SearchField } from "../Header/Header.styled";

class HeroHeader extends Component {
  render() {
    return (
      <HeroSection style={{ backgroundImage: `url(${HeroImage})` }}>
        <Container maxWidth="lg">
          <Grid container justify="center">
            <Grid item lg={8}>
              <p>Discover Beauty Secret</p>
              <HeroHeading>
                Get Inspired or Share Your Skills with the Community of Makeup
                and Beauty Lovers!
              </HeroHeading>
              <SearchField
                InputProps={{
                  endAdornment: <Search />,
                  style: {
                    padding: "1rem",
                  },
                }}
                fullWidth
                placeholder="Search for Talent or Looks"
              />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>
    );
  }
}

export default HeroHeader;
