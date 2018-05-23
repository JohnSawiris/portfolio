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
  <div className="projects container">
    <h2>projects</h2>
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="project">
            <i className="fas fa-home"></i>
            <a href="http://michaelyoungrealtor.net/#/" className="project-name">Michael Young Realtor</a>
            <p className="project-desc">
              A website for a real estate agent that lets visitors get in touch with the agent, review properties for sale, and search for properties in their area.
            </p>
            <div className="container technologies">
              <h6>Technologies used:</h6>
              <div className="row justify-content-center">
                <div className="col-sm-4 tech">
                  <img src={vue} alt="Vue" className="tech-image"/>
                  <p>Vue.js</p>
                </div>
                <div className="col-sm-4 tech">
                  <img src={vuex} alt="Vuex" className="tech-image"/>
                  <p>Vuex</p>
                </div>
                <div className="col-sm-4 tech">
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
              A record collection management app, that lets the users create an account and search records and add them to their collection or Wishlist.
            </p>
            <div className="container technologies">
              <h6>Technologies used:</h6>
              <div className="row justify-content-center">
                <div className="col-sm-4 tech">
                  <img src={angular} alt="Angular2" className="tech-image"/>
                  <p>Angular2</p>
                </div>
                <div className="col-sm-4 tech">
                  <img src={webpack} alt="Webpack" className="tech-image"/>
                  <p>Webpack</p>
                </div>
                <div className="col-sm-4 tech">
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
                A web application that lets user create an account, list their workout exercises based on the muscle group, and search and add new exercises.
              </p>
              <div className="container technologies">
                <h6>Technologies used:</h6>
                <div className="row justify-content-center">
                  <div className="col-sm-4 tech">
                    <img src={react} alt="React" className="tech-image"/>
                    <p>React.js</p>
                  </div>
                  <div className="col-sm-4 tech">
                    <img src={redux} alt="Redux" className="tech-image"/>
                    <p>Redux</p>
                  </div>
                  <div className="col-sm-4 tech">
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

export default WithAnimation(Projects, 'SlideIn', 800, 800, 800);
