import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../stylesheets/header.css";
import {Link} from "react-router-dom";
import fr from '../images/fr.png';
import it from '../images/it.png';
import pl from '../images/pl.png';
import sp from '../images/sp.png';


const Header = () => {

  const [onRoute, setOnRoute]= useState({home: true, contact: false, aboutMe: false});
   const location = useLocation();

  
  useEffect(()=> {
    if(location.pathname){
      if(location.pathname === "/"){
        setOnRoute({home: true, contact: false, aboutMe: false})
      }
      if(location.pathname === "/aboutme"){
        setOnRoute({home: false, contact: false, aboutMe: true})
      }
      if(location.pathname === "/contact"){
        setOnRoute({home: false, contact: true, aboutMe: false})
      }
    }
    
 
  }, [location])
  
  return (
    <div className="header">
      <div className="header-lang">
          <img src={fr}  alt="france"/>
          <img src={it}  alt="italy"/>
          <img src={pl}  alt="poland"/>
          <img src={sp}  alt="spain"/>
        </div>
      <div className="header-bottom">
      <div className="header-logo">
        My Jordans Collection
      </div>
      <div className="header-right-side">
        
        <div className="header-right-side-nav">
          
          <Link  to={{
                pathname: "/"
              }}  className={`header-right-side-nav-link ${onRoute.home && "header-crimson"}`}>
            <div>Collection</div>
          </Link>
          <Link to={{
                pathname: "/aboutme"
              }}  className={`header-right-side-nav-link ${onRoute.aboutMe && "header-crimson"}`}>
            <div>AboutMe</div>
          </Link>
          <Link to={{
                pathname: "/contact"
              }} className={`header-right-side-nav-link ${onRoute.contact && "header-crimson"}`}>
            <div>Contact</div>
          </Link>
        </div>
      </div>

      </div>
     
      


      
    
  
  </div>)
}

export default Header;
