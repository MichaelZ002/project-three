import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProvider from "./prov/UserProvider";

import Login from "./components/login/login";
import SignUp from "./components/login/signup";
import Home from "./components/home/";
import Favorite from "./components/fav/favorite";
import Project from "./components/project/project";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/home" component={Home} />
              <Route path="/favorite" component={Favorite} />
              <Route path="/project" component={Project} />
            </Switch>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
