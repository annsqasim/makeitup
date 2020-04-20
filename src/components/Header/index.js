import React, { Fragment } from "react";
import TopBar from "./TopBar";
import HeroHeader from "../Hero/HeroHeader";

const Header = (props) => {
  console.log("props", props);
  const { location } = props;
  const root = location && location.pathname === "/" ? true : false;
  return (
    <Fragment>
      <TopBar />
      {root ? <HeroHeader /> : ""}
    </Fragment>
  );
};

export default Header;
