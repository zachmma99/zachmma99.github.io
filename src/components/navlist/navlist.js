import React, { Component } from "react";
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
                        <h5>Home</h5>
                        <FontAwesomeIcon icon="caret-right" className="arrow" />
                    </div>
                    <div className="navlist-item">
                        <h5>About Me</h5>
                        <FontAwesomeIcon icon="caret-right" className="arrow" />
                    </div>
                    <div className="navlist-item">
                        <h5>Projects</h5>
                        <FontAwesomeIcon icon="caret-right" className="arrow" />
                    </div>
                    <div className="navlist-item">
                        <h5>Blog</h5>
                        <FontAwesomeIcon icon="caret-right" className="arrow" />
                    </div>
                    <div className="navlist-item">
                        <h5>Contact</h5>
                        <FontAwesomeIcon icon="caret-right" className="arrow" />
                    </div>
                </div>
            </div>
        );
    }
}