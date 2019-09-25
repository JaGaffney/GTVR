import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaAndroid,
    FaAppStoreIos
} from "react-icons/fa";

export class Footer extends Component {
    render() {
        return (
            <footer className="footer-distributed">
                <div className="footer-left">
                    <Link to="/">
                        <img
                            src="./static/frontend/img/logoalt.svg"
                            alt="home"
                            height={70}
                        />
                    </Link>
                    <p className="footer-links">
                        <Link to="/">Home</Link>
                        {"  |  "}
                        <Link to="/subjects">Demo</Link>
                        {"  |  "}
                        <Link to="/case">Research</Link>
                    </p>

                    <p className="footer-company-name">Teacher VR &copy; 2019</p>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">
                        'Bringing VR control back to the teachers'
                    </p>

                    <div className="footer-icons">
                        <a href="#">
                            <i>
                                <FaFacebookF size={"2em"} />
                            </i>
                        </a>
                        <a href="#">
                            <i>
                                <FaTwitter size={"2em"} />
                            </i>
                        </a>
                        <a href="#">
                            <i>
                                <FaInstagram size={"2em"} />
                            </i>
                        </a>
                        <a href="#" className="comingSoon">
                            <i>
                                <FaAndroid size={"2em"} />
                            </i>
                        </a>
                        <a href="#" className="comingSoon">
                            <i>
                                <FaAppStoreIos size={"2em"} />
                            </i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
