import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'
import logo from '../images/Landing Page images/logo.png'

import { Link } from 'react-router-dom';

// Multilingual
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from '../../Languages/en/translation.json';
import tHi from '../../Languages/hi/translation.json';
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

export default function Header() {
  const { t } = useTranslation();
  useEffect(() => {
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);
    AOS.init({
        // Global settings:
        duration : 2500,
        delay : 200
    });
    AOS.refresh();
  }, []);
  return (
    <>
        <header id="header" className="header fixed-top">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="#hero" className="logo d-flex align-items-center">
              {/* <img src="assets/img/logo.png" alt=""/> */}
              <img src={logo} alt=""/>
              <span>{t('iblogo')}</span>
            </a>

            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="nav-link scrollto active" to="#hero">{t('home')}</a></li>
                <li><a className="nav-link scrollto" href="#about">{t('about')}</a></li>
                <li><a className="nav-link scrollto" href="#features">{t('features')}</a></li>
                <li><a className="nav-link scrollto" href="#team">{t('team')}</a></li>
                <li><a className="nav-link scrollto" href="#contact">{t('contact')}</a></li>
                <li className="dropdown"><a href="/"><span>{t('language')}</span> <i className="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a onClick={ changeLang('en') } style={{cursor:'pointer'}}>{t('english')}</a></li>
                    <li><a onClick={ changeLang('hi') } style={{cursor:'pointer'}}>{t('hindi')}</a></li>
                  </ul>
                </li>
                <li><Link to="/Login" className="getstarted scrollto">{t('log_reg')}</Link></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

          </div>
        </header>
    </>
  )
}
