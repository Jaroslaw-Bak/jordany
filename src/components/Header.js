import { useState } from "react";
import "../stylesheets/header.css";
import {Link} from "react-router-dom";


const Header = () => {

  
  return (
    <div className="header">
      <div className="header-logo">My Jordans Collection</div>
      <div className="header-right-side">
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
      


      
    
  
  </div>)
}

export default Header;
