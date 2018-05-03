import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import Hero from './Hero';

class ReacentWork extends Component {
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
            <h1>RECENT WORK</h1>
            <Hero />
          </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default ReacentWork;
