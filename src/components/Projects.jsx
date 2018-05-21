import React from 'react';

import WithAnimation from './HOC/WithAnimation';

import vue from '../images/vue.png';
import vuex from '../images/vuex.png';
import vueRouter from '../images/vue-router.png';

import angular from '../images/angular.png';
import webpack from '../images/webpack.png';
import sass from '../images/sass.png';

import react from '../images/react.png';
import redux from '../images/redux.png';
import reactRouter from '../images/react-router.png';

const Projects = (props) => (
  <div className="projects">
    <h1>my work</h1>
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="project">
            <i className="fas fa-home"></i>
            <a href="http://michaelyoungrealtor.net/#/" className="project-name">Michael Young Realtor</a>
            <p className="project-desc">
              It's a website for a real estate agent that lets visitors get in touch with agent, review properties for sale, and search for properties in their area.
            </p>
            <div className="container technologies">
              <h6>Technologies used:</h6>
              <div className="row justify-content-center">
                <div className="col-sm-4">
                  <img src={vue} alt="Vue" className="tech-image"/>
                  <p>Vue.js</p>
                </div>
                <div className="col-sm-4">
                  <img src={vuex} alt="Vuex" className="tech-image"/>
                  <p>Vuex</p>
                </div>
                <div className="col-sm-4">
                  <img src={vueRouter} alt="Vue Router" className="tech-image"/>
                  <p>Vue Router</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="project">
            <i className="fas fa-compact-disc"></i>
            <a href="https://iband-aid.firebaseapp.com/" className="project-name">Band Aid</a>
            <p className="project-desc">
              It’s a record collection management app, that lets the users to create an account and search records and add them to their collection or Wishlist.
            </p>
            <div className="container technologies">
              <h6>Technologies used:</h6>
              <div className="row justify-content-center">
                <div className="col-sm-4">
                  <img src={angular} alt="Angular2" className="tech-image"/>
                  <p>Angular2</p>
                </div>
                <div className="col-sm-4">
                  <img src={webpack} alt="Webpack" className="tech-image"/>
                  <p>Webpack</p>
                </div>
                <div className="col-sm-4">
                  <img src={sass} alt="Sass" className="tech-image"/>
                  <p>Sass</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="project">
            <i className="fas fa-trophy"></i>
              <a href="https://github.com/JohnSawiris/capstone-project-planning" className="project-name">Work On Yourself</a>
              <p className="project-desc">
                It's a web application that lets user creates an account, list their workout exercises based on the muscle group, and search and add new exercises.
              </p>
              <div className="container technologies">
                <h6>Technologies used:</h6>
                <div className="row justify-content-center">
                  <div className="col-sm-4">
                    <img src={react} alt="React" className="tech-image"/>
                    <p>React.js</p>
                  </div>
                  <div className="col-sm-4">
                    <img src={redux} alt="Redux" className="tech-image"/>
                    <p>Redux</p>
                  </div>
                  <div className="col-sm-4">
                    <img src={reactRouter} alt="React Router" className="tech-image"/>
                    <p>React Router</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WithAnimation(Projects, 'SlideIn', 500, 500, 500);
