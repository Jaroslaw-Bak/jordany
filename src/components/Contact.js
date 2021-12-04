import { useState } from 'react';
import '../stylesheets/contact.css';
import { useTranslation } from "react-i18next";

const Contact = () => {

  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [message,setMessage]= useState('');
  const [surname,setSurname]= useState('');

  const {t} = useTranslation();
  

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(`message send from ${name} with email ${email} and message ${message}`)
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="contact">
      <form onSubmit={(e)=> sendEmail(e)}>
        <label htmlFor="name">{t('Contact.name')}</label>
        <input value={name} onChange={(e)=> setName(e.target.value)} placeholder={t('Contact.placeholders.name')} type="text" id="name" name="name" />
        <label htmlFor="email">{t('Contact.email')}</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder={t('Contact.placeholders.email')} type="text" id="email" name="name"></input>
        <label htmlFor="message">{t('Contact.message')}</label>
        <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder={t('Contact.placeholders.message')} id="message" name="message" />
        <button type="submit">{t('Contact.button')}</button>

       </form >
    </div>
  )
}

export default Contact;