import { useState } from "react";
import "../stylesheets/fotter.css";
import fb from '../images/facebook.png'
import yt from '../images/youtube.png'
import insta from '../images/instagram.png'
import twitter from '../images/twitter.png'


const Fotter = () => {

  return (
    <div className="fotter">
        <div className="fotter-container"> 
            <img className="fotter-icon" src={fb} alt="cos" />
            <img className="fotter-icon" src={yt} alt="cos" />
            <img className="fotter-icon" src={insta} alt="cos" />
            <img className="fotter-icon" src={twitter} alt="cos" />
            </div>
    </div>
  )
}

export default Fotter;