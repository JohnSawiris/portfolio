import React, { Component, Fragment } from 'react'

import WithAnimation from './HOC/WithAnimation'
import Typing from 'react-typing-animation'
import classnames from 'classnames'

import profile from '../images/profile.png'

class Hero extends Component {
  state = {
    show: false
  }

  render() {
    const { show } = this.state

    return (
      <Fragment>
        <div className="hero">
          <img
            src={profile}
            alt="That's me :D"
            className={classnames('profile-img', {
              'show': show
            })} />
          <div className="about-me">
            <span>
              <Typing speed={100} onFinishedTyping={() => this.setState({
                show: true
              })}>
                <h1 className="title">Hello, my name is <span className="name">John Sawiris.</span></h1>
              </Typing>
              <Typing startDelay={5000}>
                <p className="front-end">
                  I'm a web Developer located in Portland, Oregon.
                </p>
              </Typing>
            </span>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default WithAnimation(Hero, 'FadeIn', 500, 500, 500)
