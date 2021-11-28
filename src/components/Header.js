import { useState } from "react";
import "../stylesheets/header.css";
import {Link} from "react-router-dom";
import fr from '../images/fr.png';
import it from '../images/it.png';
import pl from '../images/pl.png';
import sp from '../images/sp.png';


const Header = () => {

  
  return (
    <div className="header">
      <div className="header-logo">
        My Jordans Collection
      </div>
      <div className="header-right-side">
        <div className="header-right-side-lang">
          <img src={fr}  alt="france"/>
          <img src={it}  alt="italy"/>
          <img src={pl}  alt="poland"/>
          <img src={sp}  alt="spain"/>
        </div>
        <div className="header-right-side-nav">
          <Link>
            <p>Collection</p>
          </Link>
          <Link>
            <p>AboutMe</p>
          </Link>
          <Link>
            <p>Contact</p>
          </Link>
        </div>
      </div>
      


      
    
  
  </div>)
}

export default Header;
