import React from 'react'
import {ExternalLink} from 'react-external-link';
import './MorePInfo.css'

const MorePInfo = (props) => {
    return (
        <div>
            <div className= "container1">
                <div className ="R">
                    <h1 className= "ProjectName">{props.name}</h1>
                </div>
                <div className= "L">
                    <ExternalLink href={props.link} className= "github-link">
                                <img className='foot-img' src="https://img.icons8.com/fluent/48/000000/github.png" alt="Git Hub" height= '70%'/>
                    </ExternalLink>
                </div>
            </div>
            <div className= 'Project'>
                <div className="g-left">
                    <img className='project-img' src={props.image} alt="This is where a picture of me goes" />
                </div>
                <div className="g-right">
                    <ul className="project-description"> {props.description} </ul>
                </div>
            </div>
            <div className= "ProDetails">
                <div className="gleft1">
                    <div className= "project-details1">
                        <h3 className="Detail">Language</h3>
                    </div>
                </div>
                <div className="gright1">
                     <p>{props.language}</p>
                </div>
                <div className="gleft2">
                    <p>{props.tools}</p>
                </div>
                <div className="gright2">
                    <div className= "project-details2">
                        <h3 className="Detail">Tools</h3>
                    </div>
                </div>
                <div className="gleft3">
                    <div className= "project-details3">
                    <h3 className="Detail">I loved that I learned...</h3>
                    </div>
                </div>
                <div className="gright3">
                     <p>{props.learned}</p>
                </div>
            </div>
        </div>
    )
}

export default MorePInfo
