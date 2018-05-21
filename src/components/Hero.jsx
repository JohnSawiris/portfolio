import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import WithAnimation from './HOC/WithAnimation';

const Hero = (props) => (
  <Fragment>
    <div className="container-fluid hero">
          <div className="about-me">
            <span>
              <h1 className="title">Hello, my name is <span className="name">John Sawiris</span>.</h1>
              <p className="front-end">I'm a front-end web developer.</p>
            </span>
            <Link to="/projects" className="about-btn">View my work <i className="fas fa-arrow-right"></i> </Link>
          </div>
    </div>
  </Fragment>
);

export default WithAnimation(Hero, 'FadeIn', 500, 500, 500);
