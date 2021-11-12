import React from 'react'
import './About.css';
import {ExternalLink} from 'react-external-link';


const Home = () => {
    return (
        <>  
        <div className = "aboutMePage">
            <div className= 'Me'>
                <div className="g-left">
                    <img className='abtme-img' src='images/PicMe.jpg' alt="This is where a picture of me goes" />
                </div>
                <div className="g-right">
                    <h2 className="abtme-title"> A little about me... </h2>
                    <ul className="abtme-text"> Hey, I'm Mark. A Senior at Wofford College. 
                            I am studying Computer Science and Economics. I was drawn to computer science by my interest in problem solving.
                            I enjoy to read, my current favorite book is Dune. Naturally, I am excited for the movie. I also enjoy playing soccer or any sport really. </ul>
                </div>
            </div>
            <div className= 'more-links'> 
                <ExternalLink className= "resume-link" href="https://drive.google.com/file/d/1ol3Z896oHaJvNup2LNENBR-HrKD1JgZB/view?usp=sharing"> <h3> Resume </h3> </ExternalLink>
            </div>
            <div className= 'background'>
                <div className="g-l">
                    <h2> Education </h2>
                    <ul className= 'background-list'>
                        <ul> Wofford College </ul>
                        <ul> Class of 2022 </ul>
                        <ul> Majors: Computer Science, Economics </ul>
                    </ul>
                </div>
                <div className="g-m">
                    <h2> Experince </h2>
                    <ul className= 'experience-list'>
                        <ul>World Relief Upstate Intern</ul>
                        <ul>American Credit Acceptance Finance Intern</ul>
                    </ul>
                </div>
                <div className="g-r">
                    <h2> Technical Skills </h2>
                    <ul className= 'skills-list'>
                        <ul> Javascript </ul>
                        <ul> CSS </ul>
                        <ul> C++ </ul>
                        <ul> React </ul>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}

export default Home