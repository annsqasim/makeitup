import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import { Grid, Container, Link } from "@material-ui/core";
import {
  CarouselWrap,
  SectionHeading,
  Videos,
  VidThumb,
  VidInfo,
} from "./Carousel.styled";
import vid1 from "../../assets/img/vid1.png";
import vid2 from "../../assets/img/vid2.png";
import vid3 from "../../assets/img/vid3.png";
import vid4 from "../../assets/img/vid4.png";

const options = {
  items: 4,
  nav: true,
  margin: 16,
};

const events = {
  onDragged: function (event) {},
  onChanged: function (event) {},
};

export default class CarouselSection extends Component {
  render() {
    return (
      <CarouselWrap>
        <Container>
          <Grid item lg={12}>
            <SectionHeading>Top Tips Look</SectionHeading>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <OwlCarousel options={options} events={events}>
              <Grid item lg={12}>
                <Link href="#" onClick={this.preventDefault}>
                  <Videos>
                    <VidThumb>
                      <img src={vid1} alt="Recent1" />
                    </VidThumb>
                    <VidInfo>
                      <h2>Faux Eyelashes</h2>
                      <p>@username</p>
                    </VidInfo>
                  </Videos>
                </Link>
              </Grid>
              <Grid item lg={12}>
                <Link href="#" onClick={this.preventDefault}>
                  <Videos>
                    <VidThumb>
                      <img src={vid2} alt="Recent1" />
                    </VidThumb>
                    <VidInfo>
                      <h2>Faux Eyelashes</h2>
                      <p>@username</p>
                    </VidInfo>
                  </Videos>
                </Link>
              </Grid>
              <Grid item lg={12}>
                <Link href="#" onClick={this.preventDefault}>
                  <Videos>
                    <VidThumb>
                      <img src={vid3} alt="Recent1" />
                    </VidThumb>
                    <VidInfo>
                      <h2>Faux Eyelashes</h2>
                      <p>@username</p>
                    </VidInfo>
                  </Videos>
                </Link>
              </Grid>
              <Grid item lg={12}>
                <Link href="#" onClick={this.preventDefault}>
                  <Videos>
                    <VidThumb>
                      <img src={vid4} alt="Recent1" />
                    </VidThumb>
                    <VidInfo>
                      <h2>Faux Eyelashes</h2>
                      <p>@username</p>
                    </VidInfo>
                  </Videos>
                </Link>
              </Grid>
            </OwlCarousel>
          </Grid>
        </Container>
      </CarouselWrap>
    );
  }
}
