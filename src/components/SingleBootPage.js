import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../stylesheets/singlebootpage.css';
import axios from "axios";
import { useLanguage } from "./LanguageContext";





const SingleBootPage = () => {

  const {id} = useParams();
  const [boot, setBoot]=useState();
  const lang = useLanguage();

  useEffect(() => {
    if(id){
      axios.get("http://localhost:3050/api/shoe/", {  params: {_id: parseInt(id)}  }).then(response => {
      setBoot(response.data) 
    });
    }
    
    
  }, [id])


  return (
    <div className="singlebootpage">
     {boot && <div className="singlebootpage-container"> <img  className="home-shoe" src={boot[0].imgs[0]} alt="cos" />
        <div className="singlebootpage-leftside">
          <h2>{boot[0].language.en.name}</h2>
          <p>{boot[0].language[lang].description}</p>
        </div>
      </div>}   
    </div>
  )
}

export default SingleBootPage;