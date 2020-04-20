import React from "react";
import Dashboard from "./containers/DashboardContainer";
import Details from "./containers/DetailsContainer";
import Register from "./containers/RegisterContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={(props) => <Dashboard {...props} />} />
        <Route path="/details" render={(props) => <Details {...props} />} />
        <Route path="/register" render={(props) => <Register {...props} />} />
      </div>
    </Router>
  );
}

export default App;
