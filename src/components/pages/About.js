import React from 'react'
import './About.css';
import {ExternalLink} from 'react-external-link';
import Picture from 'images/PicMe.JPG'


const About = () => {
    return (
        <>  
        <div className = "aboutMePage">
            <div className= 'Me'>
                <div className="g-left">
                    <img className='abtme-img' src={Picture} alt="This is where a picture of me goes" />
                </div>
                <div className="g-right">
                    <h2 className="abtme-title"> A little about me... </h2>
                    <ul className="abtme-text"> Hey, I'm Mark. I am a Senior at Wofford College studying Computer Science and Economics. I was drawn to computer science by my interest in problem solving and the opportunity to create products for consumers from scratch.
                            I enjoy both front end and back end design. I love the 'click' moment when the front end and back end finally work. For fun, I enjoy to read. My current favorite book is Dune and I am currently reading The Night Watchman by Louise Erdrich. I also enjoy playing soccer or any sport really.  </ul>
                </div>
            </div>
            <div className= 'more-links'> 
                <ExternalLink className= "resume-link" href="https://drive.google.com/file/d/1ol3Z896oHaJvNup2LNENBR-HrKD1JgZB/view?usp=sharing"> <h3> Resume </h3> </ExternalLink>
            </div>
            <div className= 'background'>
                <div className="g-l">
                    <h2> Education </h2>
                    <div className= 'detail-list'>
                        <li> Wofford College </li>
                        <li> Class of 2022 </li>
                        <li> Majors: Computer Science, Economics </li>
                    </div>
                </div>
                <div className="g-m">
                    <h2> Experince </h2>
                    <div className= 'detail-list'>
                        <li>World Relief Upstate Intern</li>
                        <li>American Credit Acceptance Finance Intern</li>
                    </div>
                </div>
                <div className="g-r">
                    <h2> Technical Skills </h2>
                    <div className= 'detail-list'>
                        <h4> Proficient </h4>
                        <li> React, JavaScript, Java, HTML, CSS </li>
                        <h4> Familiar </h4>
                        <li> C++, Python, R, SML, Racket </li>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default About