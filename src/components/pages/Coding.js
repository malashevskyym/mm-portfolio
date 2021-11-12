import React, {useState} from 'react'
import ProjectCards from '../ProjectCards';
import './Coding.css'
import MorePInfo from '../MorePInfo';

const Home = () => {
    return (
        <div className="project-grid"> 
            <ProjectCards title = 'Project 1' description= "This is a project that I built asdf ada ad a ad aad" image = 'images/lib2.jpg' link= {"../MorePInfo"}/>
            <ProjectCards title = 'Project 2' />
            <ProjectCards title = 'Project 3' />
            <ProjectCards title = 'Project 4' />
        </div>
    )
}

export default Home