import React from 'react';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Level21.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import bankimg1 from './bankimg1.jpg';
import bankimg2 from './bankimg2.jpg';
import bankimg3 from './bankimg3.jpg';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';
import L2_WelcomeAudio from "./L2_WelcomeAudio.mp3";
import bounceArrow from "./bounce_arrow.png";

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
const changeLang = (l) => {
  return () => {
    // alert('Ok ' + l);
    // Now change the language
    i18n.changeLanguage(l);
    localStorage.setItem('lang', l);
  }
}

export default function Level2() {

  const audio = new Audio(L2_WelcomeAudio);
  audio.play();

  const { t } = useTranslation();
  useEffect(() => {
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);
  }, []);

  const location = useLocation();
  let phone = location.state.phone;
  console.log(phone);
  const navigate = useNavigate()
  const navigateQuickTransfer = () => {
    navigate('/QuickTransfer', { state: { phone: phone } });
  }
  return (
    <>
      <div id="level-2">
        <div>
          <section>
            <Navbar bg="light" expand="lg" fixed="top">
              <Container>
                <Navbar.Brand href="#home">
                  <img src={sbilogo} className="sbi-logo" alt="sbi" style={{ height: 40, marginRight: 7 }} />
                  <b>{t('bank_online')}</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="mx-5 justify-content-end">
                  <Nav className="mx-9 fw-bold">
                    <Nav.Link href="#home">{t('home')}</Nav.Link>
                    <NavDropdown title={t('language')} id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1" onClick={changeLang('hi')}>{t('hindi')}</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1" onClick={changeLang('en')}>{t('english')}</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/Levelspage">
                      <img src={logoutlogo} className="logout-logo" alt="log-out" style={{ height: 30, marginRight: 7 }} />
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

          <section style={{ marginTop: 60 }} >
            <ul className='nav-2'>
              <li><a className="active" href="/">{t('my_profile')}</a></li>
              <li><a href="#">{t('add_beneficiary')}</a></li>
              <li class="nav-item dropdown"><a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  {t('pay_trans')}  </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item2" onClick={navigateQuickTransfer} 
                  style={{backgroundColor:'red',border:'2px solid black',animation: 'bounce 2s infinite',cursor:'pointer'}}> {t('quick_trans')}</a>
                  </li>
                  <li><a class="dropdown-item2" href="/level4"> {t('trans_bene')}</a></li>
                  {/* <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li> */}
                </ul>
                <img
                  src={bounceArrow}
                  className="arrow bounce"
                  alt="arrow"
                  style={{
                    position: 'absolute',
                    width:'70px',
                    height:'70px',
                    rotate: '90deg',
                    backgroundSize: 'conatin',
                    animation: 'bounce 2s infinite',
                    marginLeft:'-3rem'
                  }}
                />
              </li>
              <li><a href="/">{t('card')}</a></li>
              <li><a href="/">{t('bill_pay')}</a></li>
              <li><a href="/">{t('be_safe')}</a></li>
              <li><a href="/">{t('per_loan')}</a></li>
            </ul>

            <p style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}><b>{t('greeting')}</b></p>
          </section>
          <section>
            <p style={{ textAlign: 'center', fontSize: 17 }}><b>{t('transaction_acc')}</b></p>
            <table>
              <tr>
                <th>{t('acc_no')}</th>
                <th>{t('branch')}</th>
                <th>{t('available_bal')}</th>
                <th>{t('acc_statement')}</th>
              </tr>
              <tr>
                <td>60003200024</td>
                <td>Kalyan</td>
                <td>Rs. 20,000 /-</td>
                <td><a href="#">Click here</a></td>
              </tr>
            </table>
          </section>
          <section style={{ marginTop: 120 }}>
            <div class="row" style={{ alignContent: 'center' }}>
              <div class="column">
                <img src={bankimg1} className="bank-img1" alt="img1" style={{ width: '100%' }} />
              </div>
              <div class="column">
                <img src={bankimg2} className="bank-img2" alt="img2" style={{ width: '100%' }} />
              </div>
              <div class="column">
                <img src={bankimg3} className="bank-img2" alt="img2" style={{ width: '100%' }} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>

  )
}