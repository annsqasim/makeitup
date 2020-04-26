import React, { Component } from "react";
import { Grid, Container, Link } from "@material-ui/core";
import {
  TrendingSection,
  SectionHeading,
  Videos,
  VidThumb,
  VidInfo,
} from "./Trending.styled";
import Trending1 from "../../assets/img/Trending1.png";
import Trending2 from "../../assets/img/Trending2.png";

class Trending extends Component {
  preventDefault = (event) => event.preventDefault();
  render() {
    return (
      <TrendingSection>
        <Container>
          <Grid item lg={12}>
            <SectionHeading>Trending Now</SectionHeading>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Link href="details" onClick={this.preventDefault}>
                <Videos>
                  <VidThumb>
                    <img src={Trending1} alt="trending1" />
                  </VidThumb>
                  <VidInfo>
                    <h2>Faux Eyelashes</h2>
                    <p>@username</p>
                  </VidInfo>
                </Videos>
              </Link>
            </Grid>
            <Grid item lg={6}>
              <Link href="details" onClick={this.preventDefault}>
                <Videos>
                  <VidThumb>
                    <img src={Trending2} alt="trending2" />
                  </VidThumb>
                  <VidInfo>
                    <h2>Faux Eyelashes</h2>
                    <p>@username</p>
                  </VidInfo>
                </Videos>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </TrendingSection>
    );
  }
}

export default Trending;
