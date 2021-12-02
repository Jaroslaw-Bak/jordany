import { useState } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/home.css";


const Home = () => {

  const [shoes, setShoes]=useState([{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany", id: 1 }, {img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany", id: 2 }, {img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany",  id: 3 },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany" , id: 4 },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany" , id: 5 },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany", id: 6 },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany", id: 7 }])

  return (
    <div className="home">
      <div className="home-shoes-container">
          {shoes && shoes.map((shoe, index) => (
          <Link key={index} to={`/boot/${shoe.id}`} className="home-shoe-container" >
                <p>Jordany moje ulubione :)</p>
                <img  className="home-shoe" src={shoe.img} alt="cos" />   
          </Link>
        ))}
      </div>
    
  
  </div>)
}

export default Home;
