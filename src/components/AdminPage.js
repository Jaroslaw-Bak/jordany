import axios from "axios";
import { useState } from "react";
import '../stylesheets/adminSignin.css';
import { useTranslation } from "react-i18next";

const AdminPage =() => {

  
  const [name,setName]= useState('');
  const [message,setMessage]= useState('');
  const {t} = useTranslation();

  // const handleSubmit = () => {
  
  //   axios.post("http://localhost:3050/api/login", { username, password}).then(response => {
  //     if(response.data.isAuthenticated){
  //       console.log("logged in")
  //       sessionStorage.setItem("isAuthenticated", "true");
  //       history.push('/admin')
  //     }else {
  //       console.log("Wrong username or password")
  //     }
  //   })

  // };


  return (
    <div className="adminsignin">
      <label>Update your collection</label>
      <label htmlFor="name">Enter your boot name</label>
      <input value={name} onChange={(e)=> setName(e.target.value)} placeholder={t('Contact.placeholders.name')} type="text" id="name" name="name" />
      <label htmlFor="message">Enter your description en</label>
      <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder={t('Contact.placeholders.message')} id="message" name="message" />
      <label htmlFor="message">Enter your description pl</label>
      <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder={t('Contact.placeholders.message')} id="message" name="message" />
      <label htmlFor="message">Enter your description es</label>
      <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder={t('Contact.placeholders.message')} id="message" name="message" />
      <label htmlFor="message">Enter your description fr</label>
      <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder={t('Contact.placeholders.message')} id="message" name="message" />
    </div>
  
  )
}

export default AdminPage;


