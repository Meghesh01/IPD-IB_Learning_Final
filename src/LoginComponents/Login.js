import React, { useState } from 'react'
import { useEffect } from 'react'
import './Login1.scss'
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

// Multilingual
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from '../Languages/en/translation.json';
import tHi from '../Languages/hi/translation.json';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: tEn
      },
      hi: {
        translation: tHi
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
const changeLang = (l) =>{
  return () =>{
    // alert('Ok ' + l);
    // Now change the language
    i18n.changeLanguage(l);
    localStorage.setItem('lang',l);
  }
}

export default function Login() {
  const { t } = useTranslation();
  useEffect(() => {
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);
  }, []);
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: 0,
    city: "",
    state:"",
    dob: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const [login, setLogin] = useState({
    phone: 0,
   

  });
  const handleInput1 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const [signup, setSignup] = useState(true);
  const toggleSignup = () => {
    setSignup(!signup);
  };
  const postData = async (e) => {
    //e.preventDefault();
    const { name, email, phone, city, state, dob } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        city, 
        state, 
        dob,
      }),
    });
    const data = await res.json();
    
    if (data.error) {
      // e.preventDefault();
    alert("Invalid  credentials");
    
  }
    else {

      alert("Registration successful");
      navigate('/Mainpage',{state: {phone:user.phone}})
    }
  };
  
  const loginData = async (e) => {
    //e.preventDefault();
    const { phone} = login;
    console.log("Login");
    console.log(login)
    const res = await fetch("/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      phone,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.error) {
        // e.preventDefault();
      alert("Invalid Login credentials");
      
    } else {
      console.log("helo");
      console.log(login.phone);
      navigate('/Mainpage',{state: {phone:login.phone}});
    //   alert("Login successful");
      
    }
  };

  return (
    <>
     <div id="login-page">
     <div className={signup ? "cont":"cont s-signup" }>
    <div className="form sign-in">
      <h2>{t('signin')}</h2>
      <label>
        <span>{t('phone_no')}</span>
        <input type="tel" name="phone"  onChange={handleInput1}/>
      </label>
    
      {/* <Link to="/Mainpage"><button className="submit" type="button">Sign In</button></Link> */}
      <button className="submit" type="button" onClick={loginData}>
      {t('signin')}
            </button>

      <p className="forgot-pass">{t('forgot_pwd')}</p>

      
    </div>

    <div className="sub-cont">
      <div className="img">
        <div className="img-text m-up">
          <h2>{t('newhere')}</h2>
          <p>{t('signup_text1')}</p>
        </div>
        <div className="img-text m-in">
          <h2>{t('signin_text1')}</h2>
          <p>{t('signin_text2')}</p>
        </div>
        <div className="img-btn" onClick={toggleSignup}>
          <span className="m-up">{t('signup')}</span>
          <span className="m-in">{t('signin')}</span>
        </div>
      </div>
      <div className="form sign-up">
        <h2>{t('signup')}</h2>
        <label>
          <span>{t('name')}</span>
          <input type="text" name="name"  onChange={handleInput}/>
        </label>
        <label>
          <span>{t('email')}</span>
          <input type="email" name="email"  onChange={handleInput}/>
        </label>
        {/* <label>
          <span>Password</span>
          <input type="password"/>
        </label> */}
        <label>
          <span>{t('phone_no')}</span>
          <input type="number" name="phone"  onChange={handleInput}/>
        </label>
        <label>
          <span>{t('dob')}</span>
          <input type="date" name="dob" onChange={handleInput}/>
        </label>
        
        <label>
          <span>{t('city')}</span>
          <input type="text" name="city" onChange={handleInput}/>
        </label>
        {/* <label>
          <span>Dsitrict</span>
          <input type="text"/>
        </label> */}
        <label>
          <span>{t('state')}</span>
          <input type="text" name="state" onChange={handleInput}/>
        </label>
      
        <button type="button" className="submit" onClick={postData}>
        {t('signup')}
        </button>
      </div>
    </div>
  </div>
     </div>
    </>
  )
}