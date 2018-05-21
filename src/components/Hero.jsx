import React, { Fragment } from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom';

const Hero = () => {
  return(
    <Fragment>
      <div className="container-fluid hero">
        <ReactCssTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1200}
          transitionEnterTimeout={1200}
          transitionLeaveTimeout={1200}
          transitionName='FadeIn'
          >
            <div className="about-me">
              <span>
                <h1 className="title">Hello, my name is <span className="name">John Sawiris</span>.</h1>
                <p className="front-end">I'm a front-end web developer.</p>
              </span>
              <Link to="/about" className="about-btn">View my work <i className="fas fa-arrow-right"></i> </Link>
            </div>
        </ReactCssTransitionGroup>
      </div>
    </Fragment>
  );
};

export default Hero;
