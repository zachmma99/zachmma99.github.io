import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import './navlist.scss';

library.add(faCaretRight);

export default class Navlist extends Component {

    render() {
        return(
            <div className="navlist">
                <div className="navlist-items">
                    <div className="navlist-item">
                        <Link to='/home' className="navlist-link">
                            <h5>Home</h5>
                            <FontAwesomeIcon icon="caret-right" className="arrow" />
                        </Link>
                    </div>
                    <div className="navlist-item">
                        <Link to='/about' className="navlist-link">
                            <h5>About Me</h5>
                            <FontAwesomeIcon icon="caret-right" className="arrow" />
                        </Link>
                    </div>
                    <div className="navlist-item">
                        <Link to='/projects' className="navlist-link">
                            <h5>Projects</h5>
                            <FontAwesomeIcon icon="caret-right" className="arrow" />
                        </Link>
                    </div>
                    <div className="navlist-item">
                        <Link to='/blog' className="navlist-link">
                            <h5>Blog</h5>
                            <FontAwesomeIcon icon="caret-right" className="arrow" />
                        </Link>
                    </div>
                    <div className="navlist-item">
                        <Link to='/contact' className="navlist-link">
                            <h5>Contact</h5>
                            <FontAwesomeIcon icon="caret-right" className="arrow" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}