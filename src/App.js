import React from "react";
import Dashboard from "./containers/DashboardContainer";
import Details from "./containers/DetailsContainer";
import Register from "./containers/RegisterContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/fonts/stylesheet.css";
import "react-owl-carousel2/src/owl.carousel.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={(props) => <Dashboard {...props} />} />
        <Route path="/details" render={(props) => <Details {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
      </div>
    </Router>
  );
};

export default App;
