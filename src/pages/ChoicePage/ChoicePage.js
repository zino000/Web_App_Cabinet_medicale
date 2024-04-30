import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ChoicePage.css";
import docsImage from './doctors.svg';
import logoImage from './medicare_logo.png'


function ChoicePage() {

  return (
    <div className="login-container">
      <div className='background-img'>
        <img className="docs-img" src={docsImage} alt="Doctor"/>
      </div>
      <div className="login-form-container">
        <div className="logo-container">
          <img className="logo-img" src={logoImage} alt="Doctor"/>
        </div>
      </div>
    </div>
  );
}

export default ChoicePage;
