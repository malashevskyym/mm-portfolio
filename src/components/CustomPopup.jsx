import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
import ReactDom from 'react-dom'
import MorePInfo from './MorePInfo';
import {ExternalLink} from 'react-external-link';

const CustomPopup = (props) => {
  if (!props.show) return null
  return ReactDom.createPortal(
    <div className={popupStyles.overlay}>
      <div className={popupStyles.popup}>
        <span className={popupStyles.close} onClick={props.onClose}>
          &times;
        </span>
        <div className = "mInfo">
            <div className= "container1">
                <div className ="L">
                        <h2 className= "ProjectName">{props.name}</h2>
                    </div>
                    <div className= "R">
                        <ExternalLink href={props.link} className= "github-link">
                                    <img className='foot-img' src="https://img.icons8.com/fluent/48/000000/github.png" alt="Git Hub" height= '70%'/>
                        </ExternalLink>
                    </div>
                </div>
                <div className= 'Project'>
                    <div className="gright">
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
                    <div className="gright2">
                        <div className= "project-details2">
                            <h3 className="Detail">Tools</h3>
                        </div>
                    </div>
                    <div className="gleft2">
                        <p>{props.tools}</p>
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
      </div>
    </div>, 
    document.getElementById('portal')
  );
};


export default CustomPopup;

