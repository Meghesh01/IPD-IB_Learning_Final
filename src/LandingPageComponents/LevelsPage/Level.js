import React from 'react'
import '../Styles/Buttons1.css'
import '../Styles/Buttons2.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'

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

export default function Level() {
  const { t } = useTranslation();
    useEffect(() => {
        let currentLang = localStorage.getItem('lang');
        i18n.changeLanguage(currentLang);
      }, []);
  return (
    <>

      <div className="container">
        <h1 className='levelselection'>{t('level_selection')}</h1>
        <div className=' row'>
          <div className="col">
            <Link to="/Level1">
              <button class="button-29" role="button">1</button>
            </Link>
          </div>
          <div className="col">
            <Link to="/Level2">
              <button class="button-29" role="button">2</button>
            </Link>

          </div>
          <div className="col">
            <button class="button-29" role="button">3</button>
          </div>
          <div className="col">
            <button class="button-29" role="button">4</button>
          </div>
          <div className='col'>
            <button class="button-82" role="button">{t('test')}</button>
          </div>
        </div>
        <div className='row'>
          <div className="col">
            <button class="button-29" role="button">5</button>
          </div>
          <div className="col">
            <Link to="/Level6">
              <button class="button-29" role="button">6</button>
            </Link>
          </div>
          <div className="col">
            <Link to="/Level7">
              <button class="button-29" role="button">7</button>
            </Link>
          </div>
          <div className="col">
          <Link to="/Level8">
              <button class="button-29" role="button">8</button>
            </Link>
          </div>
          <div className='col'>
            <button class="button-82" role="button">{t('test')}</button>
          </div>
        </div>
        <div className=' row'>
          <div className="col">
            <Link to="/Level9">
              <button class="button-29" role="button">9</button>
            </Link>
          </div>
          <div className="col">
            <Link to="/Level10">
              <button class="button-29" role="button">10</button>
            </Link>
          </div>
          <div className="col">
            <button class="button-29" role="button">11</button>
          </div>
          <div className="col">
            <button class="button-29" role="button">12</button>
          </div>
          <div className='col'>
            <button class="button-82" role="button">{t('test')}</button>
          </div>
        </div>
      </div>
    </>
  )
}
