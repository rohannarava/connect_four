import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Page1 from './Components/Page1/Page1'
import Page2 from './Components/Page2/Page2'
import Page3 from './Components/Page3/Page3'
import './App.css';

function App() {
  return (
    <div className="container">
    <Router>
      <Switch>
          <Route path="/game">
            <Page3></Page3>
          </Route>
          <Route path="/settings">
            <Page2></Page2>
          </Route>
          <Route path="/">
            <Page1></Page1>
          </Route>
        </Switch>
    </Router>
    </div>
  )
}

export default App;
