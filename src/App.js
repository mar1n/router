import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About}/>
              <Route exact path="/user" component={User}/>
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
