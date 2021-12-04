import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/home.css";


const Home = () => {


  useEffect(() => {
    axios.get("http://localhost:3050/api/shoes/").then(response => {
      setShoes(response.data) 
      console.log(response.data)

  });
  }, [])

  const [shoes, setShoes]=useState([]);

  return (
    <div className="home">
      <div className="home-shoes-container">
          {shoes && shoes.map((shoe, index) => (
          <Link key={index} to={`/boot/${shoe.id}`} className="home-shoe-container" >
                <p>{shoe.id}</p>
                <img  className="home-shoe" src={shoe.imgs} alt="cos" />   
          </Link>
        ))}
      </div>
    
  
  </div>)
}

export default Home;
