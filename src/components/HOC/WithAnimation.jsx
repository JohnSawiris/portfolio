import React from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const WithAnimation = (Component, transition, appear, enter, leave) => {
  return props => (
    <ReactCSSTransitionGroup
      transitionName={transition}
      transitionAppear={true}
      transitionAppearTimeout={appear}
      transitionEnterTimeout={enter}
      transitionLeaveTimeout={leave}
    >
      <Component {...props} />
    </ReactCSSTransitionGroup>
  )
}

WithAnimation.propTypes = {
  Component: PropTypes.object,
  transition: PropTypes.string,
  apear: PropTypes.number,
  enter: PropTypes.number,
  leave: PropTypes.number
}

export default WithAnimation
