import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login'
import { NotificationContainer } from 'react-notifications';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './HomePage/HomePage'
import Report from './Report/Report'
import CommingSoon from './CommingSoon/CommingSoon'
class App extends Component {
  render() {
    return (
      <Router>
      <NotificationContainer />
      <div className="App">
        {/* <Header /> */}
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Login} />
            <Route path="/report" component={Report} />
            <Route path="/soon" component={CommingSoon} />
          </Switch>
        </div>
      </div>
    </Router>
    
    );
  }
}

export default App;
