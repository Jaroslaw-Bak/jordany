import { useState } from 'react';
import '../stylesheets/contact.css';

const Contact = () => {

  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [message,setMessage]= useState('');

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
        <label htmlFor="name">Name</label>
        <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter your name" type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" type="text" id="email" name="name"></input>
        <label htmlFor="message">Message</label>
        <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Enter your message" id="message" name="message" />
        <button type="submit">Send</button>
       </form >
    </div>
  )
}

export default Contact;