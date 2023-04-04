import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'
import features from '../images/Landing Page images/Landing Page/Features.jpg'

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

export default function Features() {
    const { t } = useTranslation();
    useEffect(() => {
        let currentLang = localStorage.getItem('lang');
        i18n.changeLanguage(currentLang);
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
        <section id="features" className="features">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <p>{t('features')}</p>
                </header>

                <div className="row">

                    <div className="col-lg-6">
                    {/* <img src="assets/img/Landing Page/Features.jpg" className="img-fluid" alt=""/> */}
                    <img src={features} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                    <div className="row align-self-center gy-4">

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>{t('f1')}</h3>
                        </div>
                        </div>

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>{t('f2')}</h3>
                        </div>
                        </div>

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>{t('f3')}</h3>
                        </div>
                        </div>

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>{t('f4')}</h3>
                        </div>
                        </div>

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>{t('f5')}</h3>
                        </div>
                        </div>

                        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                        <div className="feature-box d-flex align-items-center">
                            <i className="bi bi-check"></i>
                            <h3>{t('f6')}</h3>
                        </div>
                        </div>

                    </div>
                    </div>

                </div> 

            </div>

        </section>
    </>
  )
}
