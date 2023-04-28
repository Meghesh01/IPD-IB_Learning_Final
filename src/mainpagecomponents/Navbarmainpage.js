import React from 'react'
import userlogo from '../images/userlogo.png'
import coins from '../images/coins.png'
import rupee from '../images/rupee.png'
import './Navbarmainpage1.scss'
import { useEffect } from 'react'

import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
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

export default function Navbarmainpage(props) {
    const { t } = useTranslation();
    useEffect(() => {
        let currentLang = localStorage.getItem('lang');
        i18n.changeLanguage(currentLang);
      }, []);
      
      const navigate = useNavigate()
    const navigateLevelsPage = () => {
          navigate('/LevelsPage',{state: {phone:props.phone}});
        }
  return (

    <>
   <div id="navbar-mainpage">
   <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{t('iblogo')}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="mx-auto">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='nav-item'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">{t('pts_earned')}
                                        <img src={coins} className="coins" alt="coin" /> {props.points}pts</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='nav-item'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">{t('curr_bal')}<img src={rupee} className="rupee" alt="rupee" /> 20,000 /-</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='nav1-item'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">{t('welcome')} ! {props.name}</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="middle">
                        <ul className="navbar-nav mb-2 mb-lg-0 ">
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">{t('user_menu')}<img src={userlogo} className="User-logo" alt="logo" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                                    <li><Link to="/Scoreboard" className="dropdown-item" >{t('score_board')}</Link></li>
                                    {/* <li><a className="dropdown-item" href="/">Language</a></li> */}
                                    <li className="dropdown-item" onClick={navigateLevelsPage}>Levels Page</li>

                                    <li><a className="dropdown-item" href="/">{t('logout')}</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
   </div>
    </>
  )
}
