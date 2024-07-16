import React from 'react'
import "./NavigationComponent.css";
import {Routes,BrowserRouter as Router,Link,Route} from "react-router-dom";
import LoginComponent from '../../routes/LoginComponents/LoginComponent'
import SignUpComponent from '../../routes/SignUpComponents/SignUpComponent'
import UserDataComponent from '../../routes/UserDataComponents/UserDataComponent';


const NavigationComponent = () => {
  return (
   <Router>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
            </li>
            <li>
            <Link to="/SignUp">Sign up</Link>
            
          </li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route exact path="/" element={<LoginComponent></LoginComponent>}></Route>
      
      <Route exact path="/SignUp" element={<SignUpComponent></SignUpComponent>}></Route>
      <Route exact path="/userdata" element={<UserDataComponent></UserDataComponent>}></Route>
    </Routes>
   </Router>
  )
}

export default NavigationComponent