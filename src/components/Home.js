import { useState } from "react";
import "../stylesheets/home.css";


const Home = () => {

  const [shoes, setShoes]=useState([{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany" }, {img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany" }, {img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany" },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany" },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany" },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany" },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany" }])

  return (
    <div className="home">
      <div className="home-shoe-container">
          {shoes && shoes.map(shoe => (
          <div > 
              <img className="home-shoe" src={shoe.img} alt="cos" />

            </div>
        ))}
      </div>
    
  
  </div>)
}

export default Home;
