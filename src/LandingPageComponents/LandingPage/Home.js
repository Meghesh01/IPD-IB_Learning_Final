import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'
import Header from './Header';
import WhatWeDo from '../images/Landing Page images/Landing Page/WhatWeDo2.png'
import Para1audioEnglish from "./Para1audioEnglish.mp3";
import Para1audioHindi from "./Para1audioHindi.mp3";

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

export default function Home() {
    const { t } = useTranslation();
    useEffect(() => {
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);
    }, []);
    const audio = new Audio(Para1audioEnglish);
    audio.loop = true;

    const audio1 = new Audio(Para1audioHindi);
    audio.loop = true;
    return (
        <>
            <section id="hero" className="hero d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">

                            <h1 data-aos="fade-up">{t('whatwedo')}</h1>
                            <div data-aos="fade-up">
                            <button className='playbutton'
                                    onClick={() => {
                                        audio.loop = false;
                                        audio.play();
                                    }}
                                >
                                    {t('english')}
                                </button>
                                <button className='playbutton mx-3'
                                    onClick={() => {
                                        audio1.loop = false;
                                        audio1.play();
                                    }} 
                                >
                                    {t('hindi')}
                                </button>
                                {/* <button onClick={() => (audio.loop = false)}>Pause</button> */}
                            </div>
                            <br />
                            <h2 data-aos="fade-up" data-aos-delay="400">
                            {t('home_text1')}
                            </h2>
                            {/* <div data-aos="fade-up" data-aos-delay="600">
                                <div className="text-center text-lg-start">
                                    <a href="#" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>{t('getstarted')}</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                            {/* <img src="assets/img/Landing Page/WhatWeDo2.png" className="img-fluid" alt=""/> */}
                            <img src={WhatWeDo} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
