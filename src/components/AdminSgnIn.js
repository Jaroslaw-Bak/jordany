import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import '../stylesheets/adminSignin.css';


const AdminSgnIn =() => {

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const history = useHistory();

  const handleSubmit = () => {
  
    axios.post("https://sparkling-understood-pyramid.glitch.me/api/login", { username, password}).then(response => {
      if(response.data.isAuthenticated){
        console.log("logged in")
        sessionStorage.setItem("isAuthenticated", "true");
        history.push('/admin')
      }else {
        console.log("Wrong username or password")
      }
    })

  };


  return (
    <div className="adminsignin">
      <label>login</label>
      <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
      <label>password</label>
      <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}  />
      <button onClick={()=> handleSubmit()} >Sign In</button>
    </div>
  
  )
}

export default AdminSgnIn;


