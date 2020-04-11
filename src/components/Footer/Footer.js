import React, { Component } from "react";
import { Grid, Container, Link, Typography } from "@material-ui/core";
import { FooterSection, FooterBanner, LinkBtn } from "./Footer.styled";

export default class Footer extends Component {
  render() {
    return (
      <FooterSection>
        <Container>
          <Grid container className="wrap">
            <Grid item lg={12}>
              <FooterBanner>
                <div>
                  <h1>Become a Makeup Celebrity</h1>
                  <p>Share your skills with beauty lovers</p>
                  <LinkBtn>Upload Video</LinkBtn>
                </div>
              </FooterBanner>
            </Grid>
          </Grid>
          <Grid container className="footer-bottom">
            <Grid item lg={6}>
              &copy; 2020. All rights reserved
            </Grid>
            <Grid item lg={6}>
              <Typography>
                <Link className="facebook" href="#">
                  Facebook
                </Link>
                <Link className="insta" href="#">
                  Instagram
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </FooterSection>
    );
  }
}
