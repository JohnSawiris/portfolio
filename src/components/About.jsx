import React from 'react';

import WithAnimation from './HOC/WithAnimation';

//IMAGES
import react from '../images/react.png';
import redux from '../images/redux.png';
import reactRouter from '../images/react-router.png';

import vue from '../images/vue.png';
import vuex from '../images/vuex.png';
import vueRouter from '../images/vue-router.png';

import angular from '../images/angular.png';
import webpack from '../images/webpack.png';
import jQuery from '../images/jquery.png';
import sass from '../images/sass.png';
import bootstrap from '../images/bootstrap.png';
import css from '../images/css3.png';
import html from '../images/html5.png';
import cSharp from '../images/Logo_csharp.svg';


const About = (props) => (
    <div className="about container">

      <div className="about-content">
        <h2>about me</h2>
        <p>My passion is learning new things and being a web developer is signing up to be a lifetime learner.
        I moved to Portland, OR in 2014 from Cairo, Egypt. I gained experience working in customer service and technical support teams. In late 2016, I decided to learn website development. Learning new technologies and languages requires skills I already had, such as problem solving, attention to detail, and an open mind. I recently graduated from CSS/REACT track at Epicodus and I completed a two month internship at Trailhead marketing. These experiences have prepared me to an expert at frontend web development.
        </p>
      </div>
      <div className="about-content container-fluid">
        <h2>technical skills</h2>
        <div className="row">
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={react} alt="React.js"/>
            </div>
            <h4 className="skill-name">React.js</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={reactRouter} alt="React Router"/>
            </div>
            <h4 className="skill-name">React Router</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={redux} alt="Redux"/>
            </div>
            <h4 className="skill-name">Redux</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={vue} alt="Vue"/>
            </div>
            <h4 className="skill-name">Vue.js</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={vuex} alt="Vuex"/>
            </div>
            <h4 className="skill-name">Vuex</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={vueRouter} alt="Vue Router"/>
            </div>
            <h4 className="skill-name">Vue Router</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={angular} alt="Angular2"/>
            </div>
            <h4 className="skill-name">Angular2</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={webpack} alt="Webpack"/>
            </div>
            <h4 className="skill-name">Webpack</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={jQuery} alt="jQuery"/>
            </div>
            <h4 className="skill-name">jQuery</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={sass} alt="Sass"/>
            </div>
            <h4 className="skill-name">Sass</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={bootstrap} alt="Bootstrap"/>
            </div>
            <h4 className="skill-name">Bootstrap</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={css} alt="CSS" />
            </div>
            <h4 className="skill-name">CSS3</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={html} alt="HTML5"/>
            </div>
            <h4 className="skill-name">HTML5</h4>
          </div>
          <div className="skill col-sm-4">
            <div className="skill-img">
              <img src={cSharp} alt="C#"/>
            </div>
            <h4 className="skill-name">C#</h4>
          </div>
        </div>
      </div>

    </div>
  );

export default WithAnimation(About, 'SlideIn', 800, 800, 800);
