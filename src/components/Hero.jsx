import React, { Fragment } from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import profileImage from '../images/profile-image.jpg';

const Hero = () => {
  return(
    <Fragment>
      <div className="container-fluid hero">
        <ReactCssTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={3000}
          transitionEnterTimeout={3000}
          transitionLeaveTimeout={3000}
          transitionName='FadeIn'
          >
            <div className="about-me">
              <div className="profile-image">
                <img src={profileImage} alt="John Sawiris" />
              </div>
              <span>
                <h1 className="title">Hello, my name is <span className="name">John Sawiris</span>.</h1>
                <p className="about-me-context">I'm a front-end web developer.</p>
              </span>
              <button type="button" className="about-btn">View my work <i className="fas fa-arrow-right"></i> </button>
            </div>
        </ReactCssTransitionGroup>
      </div>
    </Fragment>
  );
};

export default Hero;
