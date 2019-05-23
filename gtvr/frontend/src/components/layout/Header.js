import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

const Header = props => {
  const [menu, setMenu] = useState(true)
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
    <ul className="header__nav-ul animated fadeInRight fast">

      <li><NavLink to="/subjects" activeClassName="active" className="header__nav-li-right">Demo</NavLink></li>
      <li><NavLink to="/case" activeClassName="active" className="header__nav-li-right">Blog</NavLink></li>
      <li><NavLink to="/contact" activeClassName=" active" className="header__nav-li-right">Contact</NavLink></li>
      {/* <li><NavLink to="/login" activeClassName=" active" className="header__nav-li-right">Login</NavLink></li>
      <li><NavLink to="/register" activeClassName=" active" className="header__nav-li-right">Sign up</NavLink></li> */}
      <li>|</li>
      
      {/* <li><NavLink to="/case" activeClassName=" active" className="header__nav-li-right">Case Study</NavLink></li>
      <li><NavLink to="/about" activeClassName="active" className="header__nav-li-right">About</NavLink></li> */}
      
    </ul>
  )

  return (
    <header>
      <nav className="header__nav">
        <ul className="header__nav-ul-logo">
          <li><Link to="/" className="header__nav-li"><img src="./static/frontend/img/logo.svg" alt="home" height={70} /></Link></li>
        </ul>

        <div className="header__nav-menu" onClick={onMenuHandler}>
          <div className={(menu) ? 'menu icon' : 'arrow-left icon'}></div>
        </div>

        {(!menu && linkValues)}
      </nav>
    </header>
  )
}

export default Header


