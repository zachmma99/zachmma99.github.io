import React from "react";

import './projects.scss';

export default function Projects () {

    return(
        <div className="projects">
            <h3>Projects</h3>
            <p>Here you will find a summary of my work and projects.</p>
            <div className="projects-content">
                <div className="project-card">
                    <h5>Project Name</h5>
                    <p>
                        Lorem Ipsum
                    </p>
                </div>
                <div className="project-card">
                    <h5>Project Name</h5>
                </div>
                <div className="project-card">
                    <h5>Project Name</h5>
                </div>
                <div className="project-card">
                    <h5>Project Name</h5>
                </div>
                <div className="project-card">
                    <h5>Project Name</h5>
                </div>
                <div className="project-card">
                    <h5>Project Name</h5>
                </div>
            </div>
        </div>
    );
}