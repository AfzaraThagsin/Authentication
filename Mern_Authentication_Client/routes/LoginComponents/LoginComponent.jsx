import React from 'react'
import axios from 'axios'
import { useState } from 'react';

import "./LoginComponent.css"
const LoginComponent = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandler = (event) =>{
      setEmail(event.target.value)
    }
  
  const passwordHandler = (event) =>{
      setPassword(event.target.value)
    }
  
  const formSubmitHandler = (event) =>{
      event.preventDefault()
      
      axios
      .post(`http://localhost:3500/api/v1/login`,
        {
          email:email,
          password:password
        }
      )
      .then((response)=>{
        if(response.status==201)
          {
            alert(`Welcome ${response.data.firstName} ${response.data.lastName}`)
            window.localStorage.setItem('token',response.data.token)
            window.location.href='/userdata'
          }
      })
      .catch((error)=>{
          alert(`Status : ${error.response.status} - ${error.response.data.message}`)
      })
      
      // console.log('Username:', username);
      // console.log('Password:', password);
    };
  


  return (
    <div className='login'>
    <h2>Login</h2>
    <form onSubmit={formSubmitHandler}>
      <div className='user'>
        <label >Email:</label>
        <input
          type='email'
          className='form-control'
          placeholder='Email'
          value={email}
          onChange={emailHandler}
          required
        />
      </div>
      <div className='pass'>
        <label >Password:</label>
        <input
          type='password'
          className='form-control'
          placeholder='Password'
          value={password}
          onChange={passwordHandler}
          required
        />
      </div>
      <div className='button'>
      <button type="submit">Login</button>
      </div>
    </form>
  </div>
  )
}

export default LoginComponent