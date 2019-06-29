import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
      <footer className="footer-distributed">

        <div className="footer-left">
          <Link to="/"><img src="./static/frontend/img/logoalt.svg" alt="home" height={70} /></Link>
          <p className="footer-links">
            <Link to="/">Home</Link>
            ·
            <Link to="/subjects">Demo</Link>
            ·
            <Link to="/case">Research</Link>
            ·
            <Link to="/contact">Contact</Link>
          </p>

          <p className="footer-company-name">Teacher VR &copy; 2019</p>
        </div>

        <div className="footer-center">
          <div>
            <i>Ph</i>
            <p>000 000 000</p>
          </div>

          <div>
            <i>Em</i>
            <p><a href="">jon.adam.gaffney@gmail.com</a></p>
          </div>

        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About Teacher VR</span>
            Bringing VR control back to the teachers
          </p>

          <div className="footer-icons">

            <a href="#"><i>Fa</i></a>
            <a href="#"><i>Tw</i></a>
            <a href="https://trello.com/b/C18HgKfU/great-teacher-virtual-reality"><i>Tr</i></a>
            <a href="https://github.com/JaGaffney/GTVR/"><i>Gi</i></a>
            <a href="https://jongaffney.tech/"><i>{'{ '}j</i></a>

          </div>

        </div>

      </footer>
    )
  }
}

export default Footer
