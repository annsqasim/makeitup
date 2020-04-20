import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import CarouselSection from "../components/CarouselSection/CarouselSection";
import Trending from "../components/Trending/Trending";
import Details from "../components/Details";
import Owner from "../components/Owner";

class DetailsContainer extends Component {
  render() {
    return (
      <Fragment>
        <Header {...this.props} />
        <Details />
        <Owner />
        <CarouselSection />
        <Trending />
        <Footer />
      </Fragment>
    );
  }
}

export default DetailsContainer;
