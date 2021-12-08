import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
import ReactDom from 'react-dom'

const CustomPopup = (props) => {
  if (!props.show) return null
  return ReactDom.createPortal(
    <div className={popupStyles.overlay}>
      <div className={popupStyles.popup}>
        <h2>{props.title}</h2>
        <span className={popupStyles.close} onClick={props.onClose}>
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}</div>
      </div>
    </div>, 
    document.getElementById('portal')
  );
};


export default CustomPopup;

