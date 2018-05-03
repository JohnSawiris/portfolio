import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

//Components
import Hero from './Hero';

class Home extends Component {
  render () {
    return(
      <Fragment>
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}
          transitionName='SlideIn'
        >
        <Hero />
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Home;
