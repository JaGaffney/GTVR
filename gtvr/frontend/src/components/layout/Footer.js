import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
      <footer className="footer-distributed">

        <div className="footer-left">
          <h3><span>logo here</span></h3>
          <p className="footer-links">
            <Link to="/">Home</Link>
            ·
            <Link to="/lessons">Lessons</Link>
            ·
            <Link to="/about">About</Link>
            ·
            <Link to="/case">Case Study</Link>
            .
            <Link to="/contact">Contact</Link>
          </p>

          <p className="footer-company-name">Great Teacher VR &copy; 2019</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-phone"></i>
            <p>phone number here</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="">jon.adam.gaffney@gmail.com</a></p>
          </div>

        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About Great Teacher VR</span>
            Info here
          </p>

          <div className="footer-icons">

            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="https://trello.com/b/C18HgKfU/great-teacher-virtual-reality"><i className="fa fa-trello"></i></a>
            <a href="https://github.com/JaGaffney/GTVR/"><i className="fa fa-github"></i></a>
            <a href="https://jongaffney.tech/"><i>{'{ '}j</i></a>

          </div>

        </div>

      </footer>
    )
  }
}

export default Footer
