import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <nav className="header__nav">
        <ul className="header__nav-ul">
          <li className="header__nav-li"><Link to="/">Logo/Home</Link></li>
          <li className="header__nav-li-right"><Link to="/about">About</Link></li>
          <li className="header__nav-li-right"><Link to="/lessons">Lessons</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Header
