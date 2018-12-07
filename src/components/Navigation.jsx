import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

// import WithAnimation from './HOC/WithAnimation'

class Navigation extends PureComponent {
  state = {
    isActive: false
  }

  toggleActive = () => this.setState(state => ({
    isActive: !state.isActive
  }))

  render() {
    const { isActive } = this.state;
    return (
      // <nav className='navbar navbar-expand-lg navbar-light'>
      //   <ul className='navbar-nav'>
      //     <li className='nav-item'>
      //       <Link className='nav-link' to='/'>home</Link>
      //     </li>
      //     <li className='nav-item'>
      //       <Link className='nav-link' to='/about'>about me</Link>
      //     </li>
      //     <li className='nav-item'>
      //       <Link className='nav-link' to='/projects'>projects</Link>
      //     </li>
      //   </ul>
      // </nav>
      <nav
        className='navigation'
        onClick={this.toggleActive}
      >
        <div className={classnames('humburger-btn', {
          active: isActive
        })}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={classnames('menu', {
          active: isActive
        })}>
          <ul className='menu-links'>
            <li className='menu-link'>
              <Link to='/'>
                <i className='fas fa-home'></i>
                <span className='link-title'>home</span>
              </Link>
            </li>
            <li className='menu-link'>
              <Link to='/about'>
                <i className='fas fa-book-open'></i>
                <span className='link-title'>about</span>
              </Link>
            </li>
            <li className='menu-link'>
              <Link to='/projects'>
                <i className='fas fa-cogs'></i>
                <span className='link-title'>projects</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navigation
