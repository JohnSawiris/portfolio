import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

//Styles
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Routes Components
import Navigation from './components/Navigation';
import Home from './components/Home';
import RecentWork from './components/RecentWork';
import About from './components/About';

class App extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recentwork" component={RecentWork} />
          <Route path="/about" component={About} />
        </Switch>
        <Navigation />
      </Fragment>
    )
  }
}

export default App;
