import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

//Styles
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = (props) => {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/"
          component={Hero} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </Fragment>
  )
}

export default App;
