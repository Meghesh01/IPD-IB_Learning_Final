import React from 'react'
import './Scoreboard1.scss';
import Navbarmainpage from '../mainpagecomponents/Navbarmainpage';
import coins from '../images/coins.png'
import rupee from '../images/rupee.png'
import earn from '../images/earn.jpg'
import { useEffect } from 'react'
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

export default function Scoreboard() {
    const { t } = useTranslation();
    useEffect(() => {
        let currentLang = localStorage.getItem('lang');
        i18n.changeLanguage(currentLang);
      }, []);
    return (
        <>
            <div id="score-board">
            <Navbarmainpage/>
            <div className='title'><span className='score'>{t('score_board')}</span></div>
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-7 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <li><b>{t('pts_earned')}</b> :
                                            <img src={coins} className="coins" alt="coin" /> <b>500pts </b>
                                        </li>
                                        <li>
                                            <b>{t('curr_bal')}</b>: <img src={rupee} className="rupee" alt="rupee" /> <b>20,000 /-</b>
                                        </li>
                                        {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle"
                                            width="150" />
                                        <div className="mt-3">
                                            <h4>Meghesh Nagpure</h4>
                                            <p className="text-secondary mb-1">Student at IB Learning</p>
                                            <p className="text-muted font-size-sm">Kalyan, Thane, Maharashtra</p>
                                            <button type="button" class="btn btn-success mx-2">Start</button>
                                            <button type="button" class="btn btn-danger mx-2">Logout</button>
                                            <button type="button" class="btn btn-primary mx-2">Upload Photo</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h3 className="mb-0"><b>{t('earned_history')} </b></h3>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Level 1:</h6>
                                        <span className="text-secondary">
                                            <img className='coins' src={coins} alt="coin"/><b>500pts</b></span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Invite reward:</h6>
                                        <span className="text-secondary">
                                            <img className='coins' src={coins} alt="coin"/>
                                            <b>250pts</b></span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Level 2: </h6>
                                        <span className="text-secondary">
                                            <img className='coins' src={coins} alt="coin"/><b>500pts</b></span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Level 3: </h6>
                                        <span className="text-secondary">
                                            <img className='coins' src={coins} alt="coin"/><b>300pts</b></span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Level 4: </h6>
                                        <span className="text-secondary">
                                            <img className='coins' src={coins} alt="coin"/><b>400pts</b></span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <div class="d-grid gap-2 col-10 mx-auto">
                                            {/* <Link to="/Viewpassbook">
                                                <button class="button-39">View Passbook</button>
                                            </Link>
                                            <Link to="/Viewdebitcard">
                                                <button class="button-40">View Virtual Debit Card</button>
                                            </Link> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div class="container">
                                            <img src={earn} className="earn" alt="earn"/>
                                            <div class="text-block">
                                            <hr />
                                            </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h6 className="mb-0">{t('how_to_refer_earn')}</h6>
                                        </div>
                                        
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">{t('step1')}</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                        {t('s1_text')}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">{t('step2')}</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                        {t('s2_text')}
                                        </div> 
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-center">
                                            <div><img className='earn' src={earn}/></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h6 className="mb-0">How to refer and earn ?</h6>
                                        </div>
                                        
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Step 1 :</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                            Send a invite to your friend by clicking the Refer button below
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Step 2 :</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                            Your friend should register himself/herself on our website to get the invite reward of 250 pts
                                        </div> */}
                                    </div>
                                    <div ><button type="button" className="button-32">{t('refer')}</button></div>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>
            </div>
        </>
    )
}
