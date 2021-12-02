import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../stylesheets/singlebootpage.css';


const SingleBootPage = () => {

  const {id} = useParams();
  const [shoes, setShoes]=useState([{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany", id: 1 }, {img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany", id: 2 }, {img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany",  id: 3 },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany" , id: 4 },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany" , id: 5 },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany", id: 6 },{img: 'https://c.static-nike.com/a/images/w_960,c_limit,f_auto/oyrsoyhnv0gpjmoq1ntn/blue-chill.jpg', name: "Jordany", id: 7 }])
  const [boot, setBoot]=useState();

  useEffect(() => {
    if(id){
      let shoe = shoes.filter((item)=> item.id === parseInt(id))
      setBoot(shoe[0]);
    }
    
    
  }, [id])

  return (
    <div className="singlebootpage">
     {boot && <div className="singlebootpage-container"><img  className="home-shoe" src={boot.img} alt="cos" />
        <div className="singlebootpage-leftside">
          <h2>{boot.name}</h2>
          <p>This boot is good what else do you want to know </p>
        </div>
      </div>}   
    </div>
  )
}

export default SingleBootPage;