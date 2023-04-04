import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'
import vision from '../images/Landing Page images/Landing Page/Vision.jpg'

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

export default function About1() {
    const { t } = useTranslation();
    useEffect(() => {
        let currentLang = localStorage.getItem('lang');
        i18n.changeLanguage(currentLang);
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
        <section id="about1" className="about">

            <div className="container" data-aos="fade-up">
                <div className="row gx-0">
                    <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        {/* <img src="assets/img/Landing Page/Vision.jpg" className="img-fluid" alt=""/> */}
                        <img src={vision} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="content">
                        <h2>{t('vision')}</h2>
                        <p>
                            {t('vision_text')}
                        </p>
                    </div>
                    </div>


                </div>
            </div>

        </section>
    </>
  )
}
