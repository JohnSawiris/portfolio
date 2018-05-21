import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

import WithAnimation from './HOC/WithAnimation';

const About = () => (
    <div className="about">
      <ReactCssTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnterTimeout={2000}
        transitionLeaveTimeout={2000}
        transitionName='FadeIn'
        >
      <h1>About Page</h1>
      </ReactCssTransitionGroup>
    </div>
  );

export default WithAnimation(About, 'SlideIn', 500, 500, 500);
