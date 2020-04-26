import React, { Component } from "react";
import { Grid, Container, Link } from "@material-ui/core";
import {
  RecentSection,
  SectionHeading,
  Videos,
  VidThumb,
  VidInfo,
} from "./Recent.styled";
import Recent1 from "../../assets/img/Recent1.png";
import Recent2 from "../../assets/img/Recent2.png";
import Recent3 from "../../assets/img/Recent3.png";

export default class Recent extends Component {
  preventDefault = (event) => event.preventDefault();
  render() {
    return (
      <RecentSection>
        <Container>
          <Grid item lg={12}>
            <SectionHeading>Recently Added</SectionHeading>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <Link href="/details" onClick={this.preventDefault}>
                <Videos>
                  <VidThumb>
                    <img src={Recent1} alt="Recent1" />
                  </VidThumb>
                  <VidInfo>
                    <h2>Faux Eyelashes</h2>
                    <p>@username</p>
                  </VidInfo>
                </Videos>
              </Link>
            </Grid>
            <Grid item lg={4}>
              <Link href="/details" onClick={this.preventDefault}>
                <Videos>
                  <VidThumb>
                    <img src={Recent2} alt="Recent2" />
                  </VidThumb>
                  <VidInfo>
                    <h2>Faux Eyelashes</h2>
                    <p>@username</p>
                  </VidInfo>
                </Videos>
              </Link>
            </Grid>
            <Grid item lg={4}>
              <Link href="/details" onClick={this.preventDefault}>
                <Videos>
                  <VidThumb>
                    <img src={Recent3} alt="Recent3" />
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
      </RecentSection>
    );
  }
}
