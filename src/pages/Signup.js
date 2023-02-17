import React from 'react'
function Signup() {
  return (
    <div>
    <div class="center">
      <h1>SignUp</h1>
      <form action="/signup" method="POST" id="myForm">
        <div className="txt_field">
          <input type="text" name="name"required/>
          <span></span>
          <label>name</label>
        </div>
        <div className="txt_field">
            <input type="text" name="email" required/>
            <span></span>
            <label>email</label>
          </div>
          <div className="txt_field">
            <input type="password" name="password" autocomplete="on" required/>
            <span></span>
            <label>password</label>
          </div>
        <div className="txt_field">
          <input type="password" name="cpassword" autocomplete="on" required/>
          <span></span>
          <label>confirm password</label>
        </div>
        <div className="txt_field">
        <div className="type"><span></span>
          <label>type</label>
          <select name="type" id="type">
            <option value="farmer">Farmer</option>
            <option value="broker">Broker</option>
            <option value="dealer">Dealer</option>
          </select>
          </div>
        </div>
        <button className="button button1" onclick="myFunction();">Submit</button>
        <div className="login_link">
          already have account? <a href="/">Login</a>
        </div>  
      </form>
    </div>
    </div>
  )
}

export default Signup
