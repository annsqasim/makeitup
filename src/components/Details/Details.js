import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import { DetailsSection, DetailsInfo, VideoContainer } from "./Details.styled";
import HeartIcon from "../../assets/Icons/HeartIcon";

class Details extends Component {
  render() {
    return (
      <DetailsSection>
        <Container>
          <Grid container>
            <Grid item lg={3}>
              <DetailsInfo>
                <p className="category">Hair Style</p>
                <h1>Who loves their hair half up?</h1>
                <p className="post-date">Uploaded on 21 Oct, 2019</p>
                <p className="post-excerpt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2 className="post-products">Products Used</h2>
                <ul className="products-list">
                  <li>Color bass squad</li>
                  <li>Inkliner</li>
                  <li>Cream shader brush</li>
                  <li>Duo-fibre blanding brush</li>
                  <li>Lashes</li>
                </ul>
                <Grid container>
                  <Grid item lg={6}>
                    <HeartIcon color="#FF0283" width={24} height={22} />
                  </Grid>
                  <Grid item lg={6}></Grid>
                </Grid>
              </DetailsInfo>
            </Grid>
            <Grid item lg={9}>
              <VideoContainer />
            </Grid>
          </Grid>
        </Container>
      </DetailsSection>
    );
  }
}

export default Details;
