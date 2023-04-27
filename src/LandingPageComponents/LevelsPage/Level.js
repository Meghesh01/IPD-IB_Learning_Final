import React from 'react'
import './Level.scss'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import coins from '../images/Navbar images/coins.png'
import Navbarmainpage from '../../mainpagecomponents/Navbarmainpage';
import  { useState } from "react";
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
const changeLang = (l) => {
  return () => {
    // alert('Ok ' + l);
    // Now change the language
    i18n.changeLanguage(l);
    localStorage.setItem('lang', l);
  }
}

export default function Level(props) {
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


            <Link to="/Levelmainpage5" className="level">
              <div className="part">
                <div className='parthead'><u>Level</u></div>
                <div className='parttext'>5</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Task</u></div>
                <div className='parttext'>Generate A/C statement</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Score</u></div>
                <div className='parttext'>
                  <span className='plus'>+</span>
                  <img src={coins} className="coins" alt="coin" /> 50pts
                </div>
              </div>
              <div className="part">
                <div className='parthead'><u>Status</u></div>
                <div className='parttext'>Completed / Pending</div>
              </div>
            </Link>


            <Link to="/Test1" className="quizz">
              <div>Quiz 1</div>
            </Link>


            <Link to="/Level6" className="level">
              <div className="part">
                <div className='parthead'><u>Level</u></div>
                <div className='parttext'>6</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Task</u></div>
                <div className='parttext'>Apply for Virtual Debit Card</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Score</u></div>
                <div className='parttext'>
                  <span className='plus'>+</span>
                  <img src={coins} className="coins" alt="coin" /> 50pts
                </div>
              </div>
              <div className="part">
                <div className='parthead'><u>Status</u></div>
                <div className='parttext'>Completed / Pending</div>
              </div>
            </Link>

            <Link to="/Level7" className="level">
              <div className="part">
                <div className='parthead'><u>Level</u></div>
                <div className='parttext'>7</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Task</u></div>
                <div className='parttext'>Debit Card Activation</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Score</u></div>
                <div className='parttext'>
                  <span className='plus'>+</span>
                  <img src={coins} className="coins" alt="coin" /> 50pts
                </div>
              </div>
              <div className="part">
                <div className='parthead'><u>Status</u></div>
                <div className='parttext'>Completed / Pending</div>
              </div>
            </Link>


            <Link to="/Level8" className="level">
              <div className="part">
                <div className='parthead'><u>Level</u></div>
                <div className='parttext'>8</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Task</u></div>
                <div className='parttext'>Shopping Payment Using Debit Card</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Score</u></div>
                <div className='parttext'>
                  <span className='plus'>+</span>
                  <img src={coins} className="coins" alt="coin" /> 50pts
                </div>
              </div>
              <div className="part">
                <div className='parthead'><u>Status</u></div>
                <div className='parttext'>Completed / Pending</div>
              </div>
            </Link>


            <Link to="/Level9" className="level">
              <div className="part">
                <div className='parthead'><u>Level</u></div>
                <div className='parttext'>9</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Task</u></div>
                <div className='parttext'>Perform Bill Payments</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Score</u></div>
                <div className='parttext'>
                  <span className='plus'>+</span>
                  <img src={coins} className="coins" alt="coin" /> 50pts
                </div>
              </div>
              <div className="part">
                <div className='parthead'><u>Status</u></div>
                <div className='parttext'>Completed / Pending</div>
              </div>
            </Link>


            <Link to="/Level10" className="level">
              <div className="part">
                <div className='parthead'><u>Level</u></div>
                <div className='parttext'>10</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Task</u></div>
                <div className='parttext'>Beware Of Fraudsters</div>
              </div>
              <div className="part">
                <div className='parthead'><u>Score</u></div>
                <div className='parttext'>
                  <span className='plus'>+</span>
                  <img src={coins} className="coins" alt="coin" /> 50pts
                </div>
              </div>
              <div className="part">
                <div className='parthead'><u>Status</u></div>
                <div className='parttext'>Completed / Pending</div>
              </div>
            </Link>

            <Link to="/Test2" className="quizz">
              <div>Quiz 2</div>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}
