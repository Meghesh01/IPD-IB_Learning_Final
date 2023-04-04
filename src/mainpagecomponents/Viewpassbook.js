import React from 'react'
import Navbarmainpage from './Navbarmainpage'
import './Viewpassbook1.scss'
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



export default function Viewpassbook() {
    const { t } = useTranslation();
    useEffect(() => {
        let currentLang = localStorage.getItem('lang');
        i18n.changeLanguage(currentLang);
      }, []);
  return (
    <>
    <div id="view-passbook">
    <Navbarmainpage/>
    <div className="container">
    <h2 className = "transac">Transactions : </h2>
    <table>
        <tr>
            <th>{t('sr_no')}</th>
            <th>{t('date')}</th>
            <th>{t('particulars')}</th>
            <th>{t('credit')}</th>
            <th>{t('debit')}</th>
            <th>{t('balance')}</th>
        </tr>
        <tr>
            <td>1</td>
            <td>14/08/22</td>
            <td>Cash Deposit Self</td>
            <td>1000</td>
            <td>-</td>
            <td>21000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>15/08/22</td>
            <td>Cash withdrawal Self</td>
            <td>-</td>
            <td>5000</td>
            <td>16000</td>
        </tr>
        <tr>
            <td>3</td>
            <td>16/08/22</td>
            <td>Reward</td>
            <td>500</td>
            <td>-</td>
            <td>16500</td>
        </tr>
        <tr>
            <td>4</td>
            <td>16/08/22</td>
            <td>Penalty</td>
            <td>-</td>
            <td>500</td>
            <td>16000</td>
            
        </tr>
        <tr>
            <td>5</td>
            <td>17/08/22</td>
            <td>Mr. Rakesh Seth</td>
            <td>200</td>
            <td>-</td>
            <td>16200</td>
        </tr>
        <tr>
            <td>6</td>
            <td>10/08/22</td>
            <td>Main Account</td>
            <td>-</td>
            <td>3000</td>
            <td>13200</td>
        </tr>
    </table>
    </div>
    </div>
    </>
  )
}
