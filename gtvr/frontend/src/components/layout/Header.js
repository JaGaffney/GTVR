import React, { useState, useEffect } from 'react'

import { NavLink, Link } from 'react-router-dom'

const Header = props => {
  const [menu, setMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
  })

  const onMenuHandler = (e) => {
    e.preventDefault()
    setMenu(!menu)
  }

  const linkValues = (
    <nav className="header__nav">
      <ul className="header__nav-ul-logo">
        <li><Link to="/" className="header__nav-li">Logo/Home</Link></li>
      </ul>
      <ul className="header__nav-ul">
        <li><NavLink to="/contact" activeClassName=" active" className="header__nav-li-right">Contact</NavLink></li>
        <li><NavLink to="/case" activeClassName=" active" className="header__nav-li-right">Case Study</NavLink></li>
        <li><NavLink to="/about" activeClassName="active" className="header__nav-li-right">About</NavLink></li>
        <li><NavLink to="/subjects" activeClassName="active" className="header__nav-li-right">Subjects</NavLink></li>
      </ul>
    </nav>
  )

  if (screenWidth > 770) {
    return (
      <header>
        {linkValues}
      </header>
    )
  } else {
    return (
      <header>
      <div>
        <button onClick={onMenuHandler} className="hamburger">
          <i className="fa fa-bars"></i>
        </button>
      </div>
        { menu ? (
          linkValues
        ) : (
          null
        )}
      </header>
    )
  }
}

export default Header


