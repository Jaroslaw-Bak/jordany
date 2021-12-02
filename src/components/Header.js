import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../stylesheets/header.css";
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import fr from '../images/fr.png';
import it from '../images/it.png';
import pl from '../images/pl.png';
import sp from '../images/sp.png';


const Header = () => {

  const [onRoute, setOnRoute]= useState({home: true, contact: false, aboutMe: false});
   const location = useLocation();
   const {t, i18n} = useTranslation();

  
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
          <img onClick={() => i18n.changeLanguage('en')} src={fr}  alt="france"/>
          <img onClick={() => i18n.changeLanguage('en')} src={it}  alt="italy"/>
          <img onClick={() => i18n.changeLanguage('pl')} src={pl}  alt="poland"/>
          <img onClick={() => i18n.changeLanguage('es')} src={sp}  alt="spain"/>
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
            <div>{t('Header.collection')}</div>
          </Link>
          <Link to={{
                pathname: "/aboutme"
              }}  className={`header-right-side-nav-link ${onRoute.aboutMe && "header-crimson"}`}>
            <div>{t('Header.aboutMe')}</div>
          </Link>
          <Link to={{
                pathname: "/contact"
              }} className={`header-right-side-nav-link ${onRoute.contact && "header-crimson"}`}>
            <div>{t('Header.contact')}</div>
          </Link>
        </div>
      </div>

      </div>
     
      


      
    
  
  </div>)
}

export default Header;
