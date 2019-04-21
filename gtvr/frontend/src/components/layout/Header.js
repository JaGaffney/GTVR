import React, { Component } from 'react'

import { NavLink, Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <nav className="header__nav">
        <ul className="header__nav-ul">
          <li><Link to="/" className="header__nav-li">Logo/Home</Link></li>
          <li><NavLink to="/contact" activeClassName=" active" className="header__nav-li-right">Contact</NavLink></li>
          <li><NavLink to="/case" activeClassName=" active" className="header__nav-li-right">Case Study</NavLink></li>
          <li><NavLink to="/about" activeClassName="active" className="header__nav-li-right">About</NavLink></li>
          <li><NavLink to="/subjects" activeClassName="active" className="header__nav-li-right">Subjects</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Header
