import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import "./style/global.scss";

let HomePage = React.lazy(() => import("./components/HomePage"));
let ErrorScreen = React.lazy(() => import("./components/errors/ErrorScreen"));

function App() {
  return (
    <div className="App">
      <div className="nav-primary">
        <div className="nav-left">
          <a href="/" id="logoLink">
            <h2 id="text">[GALACTIX]</h2>
            <img id="logo" src="/assets/images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="nav-right">
          <a href="/" className="link-primary">
            HOME
            <div />
          </a>
          <a href="/about" className="link-primary">
            ABOUT
            <div />
          </a>
          <a href="/projects" className="link-primary">
            PROJECTS
            <div />
          </a>
        </div>
      </div>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/error/:type" component={ErrorScreen} />
            <Redirect to="/error/404/" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
