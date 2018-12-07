import React from 'react';

import WithAnimation from './HOC/WithAnimation';

//IMAGES

import jQuery from '../images/jquery.png';
import bootstrap from '../images/bootstrap.png';
import css from '../images/css3.png';
import html from '../images/html5.png';
import materialCSS from '../images/material.png';


const About = (props) => (
  <div className="about">

    <div className="about-content">
      <h2>about me</h2>
      <p>My passion is learning new things and being a web developer is signing up to be a lifetime learner.
      I moved to Portland, OR in 2014 from Cairo, Egypt. I gained experience working in customer service and technical support teams. In late 2016, I decided to learn website development. Learning new technologies and languages requires skills I already had, such as problem solving, attention to detail, and an open mind. I recently graduated from CSS/REACT track at Epicodus and I completed a two month internship at Trailhead marketing. These experiences have prepared me to an expert at frontend web development.
        </p>
    </div>
    <div className="about-content">
      <h2>technical skills</h2>
      <div className="skills">
        <div className="skill">
          <div className="skill-img">
            <i className="fab fa-react"></i>
          </div>
          <h4 className="skill-name">React.js</h4>
        </div>
        <div className="skill">
          <div className="skill-img">
            <i className="fab fa-vuejs"></i>
          </div>
          <h4 className="skill-name">Vue.js</h4>
        </div>
        <div className="skill">
          <div className="skill-img">
            <i className="fab fa-angular"></i>
          </div>
          <h4 className="skill-name">Angular2</h4>
        </div>
        <div className="skill">
          <div className="skill-img">
            <img src={jQuery} alt="jQuery" />
          </div>
          <h4 className="skill-name">jQuery</h4>
        </div>
        <div className="skill">
          <div className="skill-img">
            <i className="fab fa-js-square"></i>
          </div>
          <h4 className="skill-name">JavaScript</h4>
        </div>
        <div className="skill">
          <div className="skill-img">
            <img src={bootstrap} alt="Bootstrap" />
          </div>
          <h4 className="skill-name">Bootstrap</h4>
        </div>
        <div className="skill">
          <div className="skill-img">
            <img src={materialCSS} alt="MaterialCSS" />
          </div>
          <h4 className="skill-name">MaterialCSS</h4>
        </div>
        <div className="skill">
          <div className="skill-img">
            <i className="fab fa-sass"></i>
          </div>
          <h4 className="skill-name">Sass</h4>
        </div>
        <div className="skill">
          <div className="skill-img">
            <i className="fab fa-css3-alt"></i>
          </div>
          <h4 className="skill-name">CSS3</h4>
        </div>
        <div className="skill">
          <div className="skill-img">
            <i className="fab fa-html5"></i>
          </div>
          <h4 className="skill-name">HTML</h4>
        </div>
      </div>
    </div>

  </div>
);

export default WithAnimation(About, 'SlideIn', 800, 800, 800);
