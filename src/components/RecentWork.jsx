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
            transitionName='SlideIn'
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={200}
          >
            <Hero />
          </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default ReacentWork;
