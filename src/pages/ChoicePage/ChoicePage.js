import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ChoicePage.css";
import docsImage from './doctors.svg';
import logoImage from './medicare_logo.png'


function ChoicePage() {

  return (
    <div className="w-screen h-screen container">

      <div className="w-screen h-full m-0 flex justify-center items-center bg-login-color flex-row">
        <div className='w-3/6	h-full flex justify-center items-center'>
          <img className="w-full h-auto" src={docsImage} alt="Doctor"/>
        </div>
        <div className="w-2/5 rounded-xl bg-white flex items-center justify-center flex-col px-0 py-5 pb-20	h-fit	mx-10 my-0">
          <div className="w-full mx-0 my-6 flex items-center justify-center">
            <img className="w-2/4" src={logoImage} alt="Doctor"/>
          </div>
          <div className="w-4/5 flex flex-col items-center justify-center gap-5">
            <div className="w-full flex flex-col items-start justify-start gap-2">
              <label className="flex items-start justify-start w-full text-base font-semibold font-sans">Email</label>
              <input className="w-full pl-1.5 py-0 font-medium bg-input-color h-11 rounded-md text-base" type="text" name="email" placeholder="username@exemple.com"/>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2">
              <label className="flex items-start justify-start w-full text-base font-semibold font-sans">Mot de passe</label>
              <input className="w-full pl-1.5 py-0 font-medium bg-input-color h-11 rounded-md text-base" type="password" name="email"/>
            </div>
            <div className="w-full flex flex-row items-center justify-start gap-3 text-sm font-medium">
              <input className="checkbox" type="checkbox"></input>
              <label className="remember-me-label">Se souvenir de moi</label>
            </div>
            <button className="mt-3 w-full ml-1 h-12 text-xl font-medium text-center text-white border border-solid border-submit-color bg-submit-color rounded-md duration-500	ease-in-out	hover:text-black hover-border hover:border-solid hover:border-login-color hover:bg-login-color">
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoicePage;
