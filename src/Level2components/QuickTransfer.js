import React from 'react'
import { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './QuickTransfer.scss';
import { Link} from 'react-router-dom';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';
import rupeeblack from '../images/rupeeblack.png'

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

export default function QuickTransfer() {
  const { t } = useTranslation();
  useEffect(() => {
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);
  }, []);
  return (
    <div id="QuickTransfer">
      <section>
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
        <img src={sbilogo} className="sbi-logo" alt="sbi" style={{height : 40 , marginRight: 7}}/>
              <b>{t('bank_online')}</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="mx-5 justify-content-end">
          <Nav className="mx-9 fw-bold">
          <Nav.Link href="#home">{t('home')}</Nav.Link>
            <NavDropdown title={t('language')} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" onClick={changeLang('hi')}>{t('hindi')}</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1" onClick={changeLang('en')}>{t('english')}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Levelspage">
            <img src={logoutlogo} className="logout-logo" alt="log-out" style={{height : 30 , marginRight: 7}}/>
            <b> {t('logout')} </b></Nav.Link>
            {/* <Link to="/Levelspage">
            
              <img src={logoutlogo} className="logout-logo" alt="log-out" style={{height : 30 , marginRight: 7}}/>
               <b>Logout</b>
            
            </Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>

    <section className='nav-2' style={{ marginTop: 60 }} >
        <ul >
            <li><b>{t('quick_transfer')}</b></li>
            </ul>
    </section>
    <section className='max-width'>
      <div className='list1'>
        <ul>
          <li><b>Account Number</b></li>
          <li><b>Account type</b></li>
          <li><b>Branch</b></li>
          <li><b>Balance</b></li>
        </ul>
        <hr className='hr'></hr>
      </div>
      <div className='list2'>
        <ul>
          <li ><input type="radio" id="html" name="fav_language" value="HTML"/> 60003200024</li>
          <li>Savings</li>
          <li>Vile parle</li>
          <li><img className="rupeeblack" src={rupeeblack}/>54000</li>
        </ul>
      </div>
      <div className='list3'>
        <ul>
          <li><b>Selected account number :</b></li>
          <li>60003200024</li>
        </ul>
      </div>
      <div className='list4'>
        <ul>
          <li><b>Beneficary Name </b>:<input type="text" className='inp1'/></li>
          <li><b>Beneficary Account Number</b> :<input type="text" className='inp2'/></li>
          <li><b>Re-enter Beneficary Account Number</b> :<input type="text" className='inp3'/> </li>
        </ul>
      </div>
      <div className='list5'>
        <ul>
          <li><b>Amount</b> : <input type="text" className='inp4'/></li>
        </ul>
      </div>
      <div className='list6'>
        <ul>
          <li><b>Purpose </b>: </li>
            <li><select className='dropdown'>
             
              <option>Select Purpose</option>
              <option>Fees</option>
              <option>Rent</option>
              <option>Bills</option>

              </select>
              </li> 
        </ul>
      </div>
      <div className='list7'>
        <ul>
          <li><input type="checkbox"/></li>
          <li>I accept the terms and conditions</li>
        </ul>
      </div>
      <div className="list8">
        <ul>
          <li><button className='button-87'><b>Submit</b></button></li>
          <li><button className='button-87'><b>Cancel</b></button></li>
        </ul>
      </div>
</section>
   </div>
  
  )
}
