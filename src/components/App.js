import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Layout from "./Layout";
import Women from "./Women";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/women" component={Women} />
      </Switch>
    </Router>
  );
}

export default App;