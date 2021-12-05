import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../stylesheets/singlebootpage.css';
import axios from "axios";
import { useLanguage } from "./LanguageContext";





const SingleBootPage = () => {

  const {id} = useParams();
  const [boot, setBoot]=useState();
  const lang = useLanguage();
  const [images, setImages]=useState();
  const [imgNumber, setImgNumber]=useState(0);

  useEffect(() => {
    if(id){
      axios.get("http://localhost:3050/api/shoe/", {  params: {_id: parseInt(id)}  }).then(response => {
      setBoot(response.data)
      setImages(response.data[0].imgs)
    });
    }
    
    
  }, [id])


  return (
    <div className="singlebootpage">
     {boot && <div className="singlebootpage-container">
        <div className="singlebootpage-leftside">
          <img  className="singlebootpage-bigImg" src={boot[0].imgs[imgNumber]} alt="cos" />
          <div className="singlebootpage-smallImage-container">
            {images && images.map((img, index)=>(
              <img onClick={()=> setImgNumber(index)} className="singlebootpage-smallImg" src={img} alt="cos"/>
            ))}
          </div>
        </div>
        <div className="singlebootpage-rightside">
          <h1>{boot[0].language.en.name}</h1>
          <p>{boot[0].language[lang].description}</p>
        </div>
      </div>}   
    </div>
  )
}

export default SingleBootPage;