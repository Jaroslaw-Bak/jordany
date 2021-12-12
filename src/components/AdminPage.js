import axios from "axios";
import { useState } from "react";
import '../stylesheets/adminPage.css';
import { useTranslation } from "react-i18next";

const AdminPage =() => {

  
  const [bootName,setBootName]= useState('');
  const [imgUrl,setImgUrl]= useState([]);
  const [descriptionEN,setDescriptionEN]= useState('');
  const [descriptionPL,setDescriptionPL]= useState('');
  const [descriptionES,setDescriptionES]= useState('');
  const [descriptionFR,setDescriptionFR]= useState('');
  const {t} = useTranslation();
  const [numOfImg, setNumOfImg]=useState([0,1,2])

  const  handleAddBoot = async () => {

    let id;
    await axios.get("http://localhost:3050/api/shoes/").then(response => {
      id = response.data[response.data.length -1].id
    })

    postBoot(id);

  };

  const addimg = (ind) => {
    console.log(imgUrl)
    setNumOfImg([...numOfImg, numOfImg[numOfImg.length-1]+1])
  }


  const removeimg = (num, ind) => {
    

    let tempArray = [...numOfImg];
    tempArray.splice(ind, 1);
    setNumOfImg(tempArray);

    
    let tempArray2 = imgUrl;
    tempArray2.splice(ind, 1);
    setImgUrl(tempArray2)
    
    
  }

  const changeImgeUrl = (e, index) => {
    let value =  e.target.value
    let tempArray = imgUrl;
    tempArray[index] = value;

    setImgUrl(tempArray)
  }

  const postBoot = (id) => {
    if(id) {
      let boot = {
        en: {
            name: bootName,
            description: descriptionEN
        },
        pl: {
          name: bootName,
          description: descriptionPL
        },
        es: {
          name: bootName,
          description: descriptionES
        },
        fr: {
          name: bootName,
          description: descriptionFR
        },
        comments: [],
        id: id+1,
        imgs: imgUrl
      }
    
      axios.post("http://localhost:3050/api/shoes/", boot).then(response => {
        if(response.status == 201){
          console.log("boot added")
        }else {
          console.log("Something went wrong")
        }
      })

    }
  }


  return (
    <div className="adminPage">
      
      <h1>{t('AdminPage.updateCollection')}</h1>
      <div className="adminPage-container">
        <div className="adminPage-leftSide">
          <label htmlFor="name">{t('AdminPage.bootName')}</label>
          <input value={bootName} onChange={(e)=> setBootName(e.target.value)} placeholder={t('AdminPage.bootName')} type="text" id="name" name="name" />
          {numOfImg && numOfImg.map(( num, index)=> (
            <>
              <label htmlFor="image">{t('AdminPage.image')}</label>
              <input value={imgUrl[index]} onChange={(e)=> changeImgeUrl(e, index)} placeholder={t('AdminPage.image')} type="text" id="image" name="image" />
              <div>
                <button className="adminPage-button"  onClick={()=> addimg(index)}>Add</button>
                <button className="adminPage-button" onClick={()=> removeimg(num, index)}> Remove</button>
              </div>
            </>
          ))}
        </div>
        <div className="adminPage-rightSide">
          <label htmlFor="message">{t('AdminPage.enterDescriptionEn')}</label>
          <textarea value={descriptionEN} onChange={(e)=> setDescriptionEN(e.target.value)} placeholder={t('AdminPage.enterDescriptionEn')} id="message" name="message" />
          <label htmlFor="message">{t('AdminPage.enterDescriptionPL')}</label>
          <textarea value={descriptionPL} onChange={(e)=> setDescriptionPL(e.target.value)} placeholder={t('AdminPage.enterDescriptionPL')} id="message" name="message" />
          <label htmlFor="message">{t('AdminPage.enterDescriptionEs')}</label>
          <textarea value={descriptionES} onChange={(e)=> setDescriptionES(e.target.value)} placeholder={t('AdminPage.enterDescriptionEs')} id="message" name="message" />
          <label htmlFor="message">{t('AdminPage.enterDescriptionFr')}</label>
          <textarea value={descriptionFR} onChange={(e)=> setDescriptionFR(e.target.value)} placeholder={t('AdminPage.enterDescriptionFr')} id="message" name="message" />
        </div>
      </div>
      <button onClick={() => handleAddBoot()}>{t('AdminPage.button')}</button>
    </div>
  
  )
}

export default AdminPage;


