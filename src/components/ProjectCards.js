import React from 'react';
import './ProjectCards.css';
import {Link} from 'react-router-dom';

const ProjectCards = (props) => {
    console.log(props);
    return (
        <Link to={props.link} className='nav-button'>
            <div className= 'card'>
                <div className="grid-left">
                        <img className='card-img' src={props.image} alt="PROJECTS" width="750" height="250" object-fit='cover' />
                </div>
                <div class="grid-right">
                    <h3 className="Project-Title">{props.title}</h3>
                    <ul className="project-list">{props.description}</ul>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCards
