import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Hamburger from 'hamburger-react';
import './Navbar.css';



//41:32
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setbutton] = useState(true);
    
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setbutton(false);
        }else {
            setbutton(true);
        }
    };

    window.addEventListener('resize', showButton);
    
    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo"> 
                        MM 
                   </Link>
                   <div className="menu-icon">
                        <Hamburger toggled={click} toggle={setClick} easing="ease-in" duration={0.3} size={28} color="#000" />
                   </div>
                   <div className={click ? 'nav-menu active':'nav-menu'}>
                       <li className='nav-item'>
                           <Link to='/' className='nav-links'onClick={closeMobileMenu}> <p>Home</p> </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/Coding' className='nav-links'onClick={closeMobileMenu}> <p>Coding</p> </Link>
                       </li>
                       {/* <li className='nav-item'>
                           <Link to='/UX' className='nav-links'onClick={closeMobileMenu}> UX Design </Link>
                       </li> */}
                       <li className='nav-item'>
                           <Link to='/About' className='nav-links'onClick={closeMobileMenu}> <p>About Me</p> </Link>
                       </li>
                   </div>
               </div>
           </nav>
        </>
    )
}

export default Navbar;