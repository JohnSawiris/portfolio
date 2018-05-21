import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

//Routes Components
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return(
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/"
            component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Fragment>
    )
  }
}

export default App;
