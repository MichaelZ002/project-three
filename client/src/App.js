import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/login/signup";
import Home from "./components/home/";
import Favorite from "./components/fav/favorite";



function App() {
  console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
  
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
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;