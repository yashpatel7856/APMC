import React from 'react'
import {useState} from 'react' 
import { Navbar } from 'react-bootstrap';
import '../CSS/style.css';
function Login() {
    const[email,setemail]=useState(""); 
	const[password,setpassword]=useState("");
    const[dataInput, setDataInput]=useState(""); 
	const submitThis=()=>{
		const info={email:email,passw:password}; 
		setDataInput([info]);
	}
   
  return (<>
    <div scope="row"><Navbar/></div>
    <div className='container' scope="row">
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={submitThis}>
        <div className="txt_field">
          <input type="text" name="email"required value={email}onChange={(e)=>setemail(e.target.value)}/>
          <span></span>
          <label>email</label>
        </div>
        <div className="txt_field">
          <input type="password" name="password" required value={password}onChange={(e)=>setpassword(e.target.value)}/>
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login"/>
        <div className="signup_link">
          Not a member? <a href="/signup">Signup</a>
        </div>
      </form>
      </div>
    </div>
    </>
  )
}

export default Login
