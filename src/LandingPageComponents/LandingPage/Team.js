import React from 'react'
import { useEffect } from 'react'
import '../Styles/style1.scss'
import team1 from '../images/team/team-1.jpg'
import team2 from '../images/team/team-2.jpg'
import team3 from '../images/team/team-3.jpg'

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

export default function Team() {
    const { t } = useTranslation();
    useEffect(() => {
        let currentLang = localStorage.getItem('lang');
        i18n.changeLanguage(currentLang);
      }, []);
  return (
    <>
        <section id="team" className="team">

                <div className="container" data-aos="fade-up">

                    <header className="section-header">
                        <h2>{t('team')}</h2>
                        <p>{t('team_text')}</p>
                    </header>

                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <div className="member-img">
                            <img src={team3} className="img-fluid" alt=""/>
                            <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                            </div>
                            <div className="member-info">
                            <h4>{t('mem1')}</h4>
                            <span><b>{t('team_text2')}</b></span>
                            
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div className="member">
                            <div className="member-img">
                            <img src={team3} className="img-fluid" alt=""/>
                            <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                            </div>
                            <div className="member-info">
                            <h4>{t('mem2')}</h4>
                            <span><b>{t('team_text2')}</b></span>
                            
                            </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                        <div className="member">
                            <div className="member-img">
                            <img src={team3} className="img-fluid" alt=""/>
                            <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                            </div>
                            </div>
                            <div className="member-info">
                            <h4>{t('mem3')}</h4>
                            <span><b>{t('team_text2')}</b></span>
                            
                            </div>
                        </div>
                        </div>

                        

                    </div>

                </div>

        </section>
    </>
  )
}
