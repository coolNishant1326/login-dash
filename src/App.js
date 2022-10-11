import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import './App.css';

import Home from './router/Home';
import About from './router/About';
import Dashboard from './router/Dashboard';
import Profile from './router/Profile';
import {AuthContext} from './context/AuthContext';



function App() {
  return (
    <div className="App">
        <Router>
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/about">About</Link>
            </li>
            <li>
              <Link className="link" to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link className="link" to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <AuthContext>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/profile" component={Profile}/>
          </AuthContext>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;

