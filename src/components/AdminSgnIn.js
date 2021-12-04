import { useState } from "react";
import { useHistory } from "react-router-dom";


const AdminSgnIn =() => {

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const history = useHistory();

  const handleSubmit = () => {
  
    //if username or password field is empty, return error message
    if (username === "" || password === "") {
      console.log("Empty username/password field")
  
    } else if (
      username.toLowerCase() === "admin" &&
      password === "123456"
    ) {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      history.push('/admin')
    } else {
      console.log("Empty username/password field")
    }
  };


  return (
    <div>
      <label>login</label>
      <input value={username} onChange={(e)=> setUsername(e.target.value)} />
      <label>password</label>
      <input value={password} onChange={(e)=> setPassword(e.target.value)}  />
      <button onClick={()=> handleSubmit()} >Sign In</button>
    </div>
  
  )
}

export default AdminSgnIn;


