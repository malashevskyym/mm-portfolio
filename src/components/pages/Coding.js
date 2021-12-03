import React, {useState} from 'react'
import ProjectCards from '../ProjectCards';
import './Coding.css'
import CustomPopup from "../CustomPopup";
import MorePInfo from '../MorePInfo';

const Home = () => {
    const [visibility, setVisibility] = useState(false);
    const [visibility1, setVisibility1] = useState(false);
    const [visibility2, setVisibility2] = useState(false);
    
    const popupCloseHandler = (e) => {
        setVisibility(e);
    };
    const popupCloseHandler1 = (e) => {
        setVisibility1(e);
    };
    const popupCloseHandler2 = (e) => {
        setVisibility2(e);
    };

    return (
        <div className="project-grid"> 
            <button className ="button" onClick={(e) => setVisibility(!visibility)}>
                <ProjectCards className="project" title = 'Parsing Library Capstone' image = 'images/lib2.jpg' bcolor="#D3DADA" />
            </button>
            <button className ="button" onClick={(e) => setVisibility1(!visibility1)}>
                <ProjectCards className="project1" title = 'Portfolio'  image = 'images/lib2.jpg' bcolor="#EBEBEB" />
            </button>
            <button className ="button" onClick={(e) => setVisibility2(!visibility2)}>
                <ProjectCards className="project2" title = 'Music Database Selector' image = 'images/lib2.jpg' bcolor="#CAD9E2"/>
            </button>
            <CustomPopup onClose={popupCloseHandler} show={visibility}>
                <MorePInfo name= "Parsing Library Capstone" link="https://github.com/WoffordCollege-COSC410/project-fall-2021-shannon.git" description = "For my capstone project, we used an agile software development framework and test-driven design to create a command line parsing library. We also created demonstrations for different features of the library." language = "Java" tools="Git, Cucumber, Gradle" learned = "I learned the challenges of creating a product from nothing. Working as a team to develop a product using Scrum allowed me to learn how to remain flexible while also delivering the product to the product owner." ></MorePInfo>
            </CustomPopup>
            <CustomPopup onClose={popupCloseHandler1} show={visibility1}>
                <MorePInfo name= "Portfolio" link="https://github.com/malashevskyym/mm-portfolio.git" description = "Used the React library to create a website demonstrating my projects and background." language = "JavaScript" tools="React" learned = "I learned the fundamentals of the React Library and creating reusable component-based design." ></MorePInfo>
            </CustomPopup>
            <CustomPopup onClose={popupCloseHandler2} show={visibility2}>
                <MorePInfo name= "Music Database Selector" link="https://github.com/malashevskyym/project4.git" description = "Created a website that retrieved Album data and comments from users for a user elected band from a database." ></MorePInfo>
            </CustomPopup>
        </div>
    )
}

export default Home