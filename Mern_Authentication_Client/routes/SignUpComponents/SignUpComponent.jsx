import React, { useState } from 'react';
import axios from 'axios'
import "./SignUpComponent.css"
const SignUpComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firstNameHandler = (event) => {
    setFirstName(event.target.value)
}

const lastNameHandler = (event) => {
    setLastName(event.target.value)
}

const emailHandler = (event) => {
    setEmail(event.target.value)
}

const passwordHandler = (event) => {
    setPassword(event.target.value)
}

const formSubmitHandler = (event) => {
    event.preventDefault()

    axios
    .post(`http://localhost:3500/api/v1/signup`,{firstName,lastName,email,password})
    .then((response)=>{
        alert(`Successfully created for ${response.data.firstName} ${response.data.lastName}`)
        window.location.href='/'
    })
    .catch((error)=>{
        alert(`Status : ${error.response.status} - ${error.response.data.message}`)
    })
  };

  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={formSubmitHandler}>
        <div className='first'>
          <label >First Name:</label>
          <input
            type='text'
            className='form-control'
            placeholder='First name'
            value={firstName}
            onChange={firstNameHandler}
            required
          />
        </div>
        <div className='last'>
          <label >Last Name:</label>
          <input
            type='text'
            className='form-control'
            placeholder='Last name'
            value={lastName}
            onChange={lastNameHandler}
            required
          />
        </div>
        <div className='email'>
          <label>Email:</label>
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
        <div>
        <button type="submit">Sign Up</button>
        </div>
        </form>
    </div>
  );
};

export default SignUpComponent;
