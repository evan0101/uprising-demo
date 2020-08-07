import React from "react";
import "./styles/App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import Leaderboard from "./Leaderboard";

const App = () => {
  return (
    <Router>
      <Route
        path="/leaderboard/:gamemode/:type/order=:orderBy/:page"
        component={Leaderboard}
      />
      <Route path="/" exact component={Home} />
    </Router>
  );
};

export default App;
