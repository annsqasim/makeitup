import React, { Fragment } from "react";
import Header from "../components/Header";
import Trending from "../components/Trending";
import Recent from "../components/Recent";
import CarouselSection from "../components/CarouselSection";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const DashboardContainer = (props) => {
  return (
    <Fragment>
      <Header {...props} />
      <Trending />
      <Recent />
      <CarouselSection />
      <Featured />
      <CarouselSection />
      <CarouselSection />
      <Footer />
    </Fragment>
  );
};

export default DashboardContainer;
