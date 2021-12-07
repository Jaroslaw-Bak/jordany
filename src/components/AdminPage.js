import axios from "axios";
import { useState } from "react";
import '../stylesheets/adminPage.css';
import { useTranslation } from "react-i18next";

const AdminPage =() => {

  
  const [bootName,setBootName]= useState('');
  const [descriptionEN,setDescriptionEN]= useState('');
  const [descriptionPL,setDescriptionPL]= useState('');
  const [descriptionES,setDescriptionES]= useState('');
  const [descriptionFR,setDescriptionFR]= useState('');
  const {t} = useTranslation();

  const  handleAddBoot = async () => {

    let id;
    await axios.get("http://localhost:3050/api/shoes/").then(response => {
      id = response.data[response.data.length -1].id
    })

    postBoot(id);

  };

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
        imgs: [
            "https://sothebys-com.brightspotcdn.com/dims4/default/dd038e4/2147483647/strip/true/crop/800x800+0+0/resize/684x684!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F40%2Fd4%2F5f3a49154e35a9a29a41b43a6cbd%2Fsmoke-grey.jpg",
            "https://sothebys-com.brightspotcdn.com/dims4/default/dd038e4/2147483647/strip/true/crop/800x800+0+0/resize/684x684!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F40%2Fd4%2F5f3a49154e35a9a29a41b43a6cbd%2Fsmoke-grey.jpg",
            "https://sothebys-com.brightspotcdn.com/dims4/default/dd038e4/2147483647/strip/true/crop/800x800+0+0/resize/684x684!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F40%2Fd4%2F5f3a49154e35a9a29a41b43a6cbd%2Fsmoke-grey.jpg",
            "https://sothebys-com.brightspotcdn.com/dims4/default/dd038e4/2147483647/strip/true/crop/800x800+0+0/resize/684x684!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F40%2Fd4%2F5f3a49154e35a9a29a41b43a6cbd%2Fsmoke-grey.jpg",
            "https://sothebys-com.brightspotcdn.com/dims4/default/dd038e4/2147483647/strip/true/crop/800x800+0+0/resize/684x684!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F40%2Fd4%2F5f3a49154e35a9a29a41b43a6cbd%2Fsmoke-grey.jpg",
            "https://sothebys-com.brightspotcdn.com/dims4/default/dd038e4/2147483647/strip/true/crop/800x800+0+0/resize/684x684!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F40%2Fd4%2F5f3a49154e35a9a29a41b43a6cbd%2Fsmoke-grey.jpg"
        ]
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
      <label htmlFor="name">{t('AdminPage.bootName')}</label>
      <input value={bootName} onChange={(e)=> setBootName(e.target.value)} placeholder={t('AdminPage.bootName')} type="text" id="name" name="name" />
      <label htmlFor="message">{t('AdminPage.enterDescriptionEn')}</label>
      <textarea value={descriptionEN} onChange={(e)=> setDescriptionEN(e.target.value)} placeholder={t('AdminPage.enterDescriptionEn')} id="message" name="message" />
      <label htmlFor="message">{t('AdminPage.enterDescriptionPL')}</label>
      <textarea value={descriptionPL} onChange={(e)=> setDescriptionPL(e.target.value)} placeholder={t('AdminPage.enterDescriptionPL')} id="message" name="message" />
      <label htmlFor="message">{t('AdminPage.enterDescriptionEs')}</label>
      <textarea value={descriptionES} onChange={(e)=> setDescriptionES(e.target.value)} placeholder={t('AdminPage.enterDescriptionEs')} id="message" name="message" />
      <label htmlFor="message">{t('AdminPage.enterDescriptionFr')}</label>
      <textarea value={descriptionFR} onChange={(e)=> setDescriptionFR(e.target.value)} placeholder={t('AdminPage.enterDescriptionFr')} id="message" name="message" />
      <button onClick={() => handleAddBoot()}>{t('AdminPage.button')}</button>
    </div>
  
  )
}

export default AdminPage;


