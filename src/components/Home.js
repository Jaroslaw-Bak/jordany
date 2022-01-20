import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/home.css";


const Home = () => {


  useEffect(() => {
    axios.get("https://sparkling-understood-pyramid.glitch.me/api/shoes/").then(response => {
      setShoes(response.data) 
  });

  }, [])

  const [shoes, setShoes]=useState([]);

  return (
    <div className="home">
      <div className="home-shoes-container">
          {shoes && shoes.map((shoe, index) => (
          <Link key={index} to={`/boot/${shoe.id}`} className="home-shoe-container" >
                <p>{shoe.language.en.name}</p>
                <img  className="home-shoe" src={shoe.imgs[0]} alt="cos" />   
          </Link>
        ))}
      </div>
    
  
  </div>)
}

export default Home;
