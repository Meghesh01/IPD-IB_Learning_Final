import React, { useEffect } from 'react'
import '../Styles/style1.scss'

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


export default function Contact() {
    const { t } = useTranslation();
    useEffect(() => {
        let currentLang = localStorage.getItem('lang');
        i18n.changeLanguage(currentLang);
      }, []);
  return (
    <>
        <section id="contact" className="contact">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>{t('contact')}</h2>
                    <p>{t('contact_us')}</p>
                </header>

                <div className="row gy-4">

                    <div className="col-lg-6">

                    <div className="row gy-4">
                        <div className="col-md-6">
                        <div className="info-box">
                            <i className="bi bi-geo-alt"></i>
                            <h3>{t('addr')}</h3>
                            <p>A108 Adam Street,<br/>New York, NY 535022</p>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="info-box">
                            <i className="bi bi-telephone"></i>
                            <h3>{t('callus')}</h3>
                            <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="info-box">
                            <i className="bi bi-envelope"></i>
                            <h3>{t('emailus')}</h3>
                            <p>info@example.com<br/>contact@example.com</p>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="info-box">
                            <i className="bi bi-clock"></i>
                            <h3>{t('openhrs')}</h3>
                            <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                        </div>
                        </div>
                    </div>

                    </div>

                    <div className="col-lg-6">
                    <form action="forms/contact.php" method="post" className="php-email-form">
                        <div className="row gy-4">

                        <div className="col-md-6">
                            <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                        </div>

                        <div className="col-md-6 ">
                            <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
                        </div>

                        <div className="col-md-12">
                            <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
                        </div>

                        <div className="col-md-12">
                            <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                        </div>

                        <div className="col-md-12 text-center">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>

                            <button type="submit">{t('send_msg')}</button>
                        </div>

                        </div>
                    </form>

                    </div>

                </div>

            </div>

        </section>
    </>
  )
}
