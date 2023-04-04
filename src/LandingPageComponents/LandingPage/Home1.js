import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'
import PS from '../images/Landing Page images/Landing Page/PS.jpg'

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

export default function Home1() {
    const { t } = useTranslation();
    useEffect(() => {
        let currentLang = localStorage.getItem('lang');
        i18n.changeLanguage(currentLang);
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
        <div className='LandingPage'>
                    <section id="hero" className="hero d-flex align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <img src={PS} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">{t('ps')}</h1>
                    <h2 data-aos="fade-up" data-aos-delay="400">
                        <ul>
                            <li>
                            {t('home1_text1')}
                            </li>
                        </ul>
                    </h2>
                    <h2 data-aos="fade-up" data-aos-delay="400">
                        <ul>
                            <li>
                            {t('home1_text2')}
                            </li>
                        </ul>
                    </h2>
                    <h2 data-aos="fade-up" data-aos-delay="400">
                        <ul>
                            <li>
                            {t('home1_text3')}
                            </li>
                        </ul>
                    </h2>
                    </div>
                </div>
            </div>

            </section>
        </div>
    </>
  )
}
