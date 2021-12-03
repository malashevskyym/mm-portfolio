import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import './Footer.css';
import {ExternalLink} from 'react-external-link';

//41:32
function Footer() {
    return (
        <>
           <nav className="footer">
               <div className="footer-container">
                    <Link to="/Home" className="footer-logo"> 
                            Mark Malashevskyy | malashevskyy7@gmail.com
                    </Link>
                   <ul className='foot-menu'>
                       <li className='foot-item'>
                            <ExternalLink href='https://www.linkedin.com/in/mark-malashevskyy-5135131b5/'>
                                <img className='foot-img' src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="Linked In"/>
                            </ExternalLink>
                       </li>
                       <li className='foot-item'>
                            <ExternalLink href='https://github.com/malashevskyym'>
                                <img className='foot-img' src="https://img.icons8.com/fluent/48/000000/github.png" alt="Git Hub" height= '70%'/>
                            </ExternalLink>   
                       </li>
                       <li className='foot-item'>
                            <ExternalLink href='https://www.instagram.com/malashevskyy7/'>
                                <img className='foot-img' src="https://img.icons8.com/ios/50/000000/instagram-new--v3.png" alt="Instagram" />
                            </ExternalLink>
                       </li>
                   </ul>
                   <div className='foot-m'>
                       <li>
                            <Link to="/Home" className="footer-l" className= "foot-link"> 
                                    Mark Malashevskyy | malashevskyy7@gmail.com
                            </Link>
                        </li>
                        <li className = "foot-links2">
                            <li className='foot-i'>
                                <ExternalLink href='https://www.linkedin.com/in/mark-malashevskyy-5135131b5/' className= "foot-link">
                                    LinkedIn
                                </ExternalLink>
                            </li>
                            <li>|</li>
                            <li className='foot-i'>
                                    <ExternalLink href='https://github.com/malashevskyym' className= "foot-link">
                                        Github                           
                                    </ExternalLink>   
                            </li>
                            <li>|</li>
                            <li className='foot-i'>
                                    <ExternalLink href='https://www.instagram.com/malashevskyy7/' className= "foot-link">
                                        Instagram
                                    </ExternalLink>
                            </li>
                        </li>
                   </div>
               </div>
           </nav>
        </>
    )
}

export default Footer;