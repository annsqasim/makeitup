import React, { Fragment } from "react";
import Header from "../components/Header";
import Trending from "../components/Trending";
import Recent from "../components/Recent";
import CarouselSection from "../components/CarouselSection";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { loginAction, loginSuccess, loginFail } from "../actions/loginAction";

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (params) => dispatch(loginAction(params)),
  user: () => dispatch(loginSuccess()),
  loginError: () => dispatch(loginFail()),
});

const DashboardContainer = (props) => {
  console.log("props", props);
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
