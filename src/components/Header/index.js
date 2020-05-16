import React, { Fragment } from "react";
import TopBar from "./TopBar";
import HeroHeader from "../Hero/HeroHeader";

const Header = (props) => {
  const { location } = props;
  const root = location && location.pathname === "/" ? true : false;
  return (
    <Fragment>
      <TopBar {...props} />
      {root ? <HeroHeader /> : ""}
    </Fragment>
  );
};

export default Header;
