import { waitFor } from '@testing-library/dom';
import React, { useState, useEffect } from "react";
import './Home.css'

const Home = () => {
    const words = ["Hey, my name is Mark Malashevskyy.", "Welcome to my Portfolio!!!"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        if (index === words.length) return;
    
        if ( subIndex === words[index].length + 1 && 
            index !== words.length - 1 && !reverse ) {
          setReverse(true);
          return;
        }
    
        if (subIndex === 0 && reverse) {
          setReverse(false);
          setIndex((prev) => prev + 1);
          return;
        }
    
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                    150, parseInt(Math.random() * 350)));
    
        return () => clearTimeout(timeout);
      }, [subIndex, index, reverse]);
    
      // blinker
      useEffect(() => {
        const timeout2 = setTimeout(() => {
          setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
      }, [blink]);
    
    return (
        <div className = "container">
            <h1 className="typewriter">
                {`${words[index].substring(0, subIndex)}${blink ? "|" : ""}`}
            </h1>
        </div>
    )
}

export default Home
