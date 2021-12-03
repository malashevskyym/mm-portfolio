import React from 'react';
import './ProjectCards.css';
import {Link} from 'react-router-dom';

const ProjectCards = (props) => {
    return (
        <Link to={props.link} className='nav-button'>
            <div className= 'card' style={{backgroundColor: props.bcolor}}>
                <div class="projectDetails">
                    <h3 className="Project-Title">{props.title}</h3>
                    <ul className="project-desc">{props.shortDescription}</ul>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCards
