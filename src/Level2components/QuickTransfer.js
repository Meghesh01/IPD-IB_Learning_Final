import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./QuickTransfer.scss";
import { useLocation } from "react-router-dom";
import sbilogo from "./sbi-logo.png";
import logoutlogo from "./logout.png";
import rupeeblack from "../images/rupeeblack.png";
// import { useLocation } from "react-router-dom";
// Multilingual
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from "../Languages/en/translation.json";
import tHi from "../Languages/hi/translation.json";
import { useNavigate } from "react-router-dom";

import bounceArrow from "./bounce_arrow.png";
import volume_icon from "./volume.png";

import QuickTransferAudio from "./QuickTransferAudio.mp3";
import BeneficiaryNameAudio from './BeneficiaryNameAudio.mp3';
import BeneficiaryAccountNumberAudio from './BeneficiaryAccountNumberAudio.mp3';
import ReEnterAudio from './ReEnter.mp3';
import AmountAudio from './AmountAudio.mp3';
import PurposeAudio from './PurposeAudio.mp3';
import TermsAudio from './TermsAudio.mp3';

i18n

  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: tEn,
      },
      hi: {
        translation: tHi,
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
const changeLang = (l) => {
  return () => {
    // alert('Ok ' + l);
    // Now change the language
    i18n.changeLanguage(l);
    localStorage.setItem("lang", l);
  };
};

export default function QuickTransfer(props) {

  const audio = new Audio(QuickTransferAudio);
  audio.play();

  const audio1 = new Audio(BeneficiaryNameAudio);
  const audio2 = new Audio(BeneficiaryAccountNumberAudio);
  const audio3 = new Audio(ReEnterAudio);
  const audio4 = new Audio(AmountAudio);
  const audio5 = new Audio(PurposeAudio);
  const audio6 = new Audio(TermsAudio);


  const { t } = useTranslation();
  useEffect(() => {
    let currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
  }, []);

  const [accountNumber, setaccountNumber] = useState("");
  const handleChange = (event) => {
    setaccountNumber(event.target.value);
  };


  const navigate = useNavigate();


  const [level2, setLevel2] = useState({
    // accountnumber: "",
    beneficiaryname: "",
    beneficiaryaccountnumber: "",
    amount: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setLevel2({ ...level2, [name]: value });
  };
  const location = useLocation();
  let phone = location.state.phone;
  // const navigate = useNavigate();
  const [user, setUser] = useState({});
  const date = new Date();
  // let phone = 9867075589;
  // const location = useLocation();
  // let phone = location.state.phone;
  const userData = async (e) => {
    //e.preventDefault();
    // const { phone:phone} = user;
    console.log("user");
    console.log(location.state.phone);
    const res = await fetch("/get-mainpage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
      }),
    });
    var data = await res.json();

    // console.log(data);
    setUser({
      name: data.data.name,
      email: data.data.email,
      phone: data.data.phone,
      city: data.data.city,
      state: data.data.state,
      dob: data.data.dob,
      points: data.data.points,
      money: data.data.money,
      accountNumber: data.data.accountNumber,
    });
    // console.log("Hello");
    // console.log(user);
    // console.log(data.data);
    // console.log(data.data.name);
  };

  const PostData = async (e) => {
    //  alert("Hi");
    // console.log("HI");
    const { beneficiaryname, beneficiaryaccountnumber, amount } =
      level2;
    const accountnumber = user.accountNumber;
    // alert(beneficiaryname);
    // alert(beneficiaryaccountnumber);
    // alert(amount);

    const res = await fetch("/level2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        accountnumber,
        beneficiaryname,
        beneficiaryaccountnumber,
        amount,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("Successful QuickTransfer");
      console.log("Successful registration");

      navigate('/LevelsPage', { state: { phone: phone } });
    }
  };


  const handleAddEntry = async (e) => {
    const { beneficiaryname, amount } =
      level2;
    console.log(level2, beneficiaryname);
    const response = await fetch("/passbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: beneficiaryname, debitMoney: amount }),
    });
    const data = await response.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("Successful QuickTransfer");
      console.log("Successful registration");

      navigate('/LevelsPage', { state: { phone: phone } });
    }

    //const data = await response.json();
    // onAddEntry(data);
    // setName('');
    // setDebitMoney('');
  };

  // const navigate = useNavigate()
  //   const navigateLevelsPage = () => {
  //     console.log(phone);
  //         navigate('/LevelsPage',{state: {phone:phone}});

  //       }
  useEffect(() => {
    // PostData();
    userData();
  }, []);
  return (
    <div id="QuickTransfer">
      <section>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={sbilogo}
                className="sbi-logo"
                alt="sbi"
                style={{ height: 40, marginRight: 7 }}
              />
              <b>{t("bank_online")}</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="mx-5 justify-content-end"
            >
              <Nav className="mx-9 fw-bold">
                <Nav.Link href="#home">{t("home")}</Nav.Link>
                <NavDropdown title={t("language")} id="basic-nav-dropdown">
                  <NavDropdown.Item
                    href="#action/3.1"
                    onClick={changeLang("hi")}
                  >
                    {t("hindi")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.1"
                    onClick={changeLang("en")}
                  >
                    {t("english")}
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Levelspage">
                  <img
                    src={logoutlogo}
                    className="logout-logo"
                    alt="log-out"
                    style={{ height: 30, marginRight: 7 }}
                  />
                  <b> {t("logout")} </b>
                </Nav.Link>
                {/* <Link to="/Levelspage">
            
              <img src={logoutlogo} className="logout-logo" alt="log-out" style={{height : 30 , marginRight: 7}}/>
               <b>Logout</b>
            
            </Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      <section className="nav-2" style={{ marginTop: 60 }}>
        <ul>
          <li>
            <b>{t("quick_transfer")}</b>
          </li>
        </ul>
      </section>
      <section className="max-width">
        <div className="list1">
          <ul>
            <li>
              <b>Account Number</b>
            </li>
            <li>
              <b>Account type</b>
            </li>
            <li>
              <b>Branch</b>
            </li>
            <li>
              <b>Balance</b>
            </li>
          </ul>
          <hr className="hr"></hr>
        </div>
        <div className="list2">
          <ul>
            <li>
              <input type="radio" id="html" name="fav_language" value="60003200024"
                checked="checked" />{" "}
              {/* {user.accountNumber} */}
              60003200024
            </li>
            <li style={{ marginLeft: '170px' }}>Savings</li>
            <li style={{ marginLeft: '220px' }}>Vile parle</li>
            <li style={{ marginLeft: '230px' }}>
              <img className="rupeeblack" src={rupeeblack} />
              54000
            </li>
          </ul>
        </div>
        {/* <div className="list3">
          <ul>
            <li>
              <b>Selected account number :</b>
            </li>
            <li> 
               {user.accountNumber} 
             
            </li>
          </ul>
        </div> */}
        <div className="list4">
          <ul>
            <li>
              <b>Beneficary Name </b>:
              <img
                src={volume_icon}
                className="volume_icon"
                alt="vol"
                style={{ height: "15px", marginLeft: "10px", cursor: 'pointer' }}
                onClick={() => {
                  audio1.loop = false;
                  audio1.play();
                }}
              />
              <img
                src={bounceArrow}
                className="arrow bounce"
                alt="arrow"
                style={{
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  rotate: '-90deg',
                  backgroundSize: 'conatin',
                  animation: 'bounce 2s infinite',
                  marginTop: '-40px',
                  marginLeft: '-30px'
                }}
              />
              <input
                type="text"
                id="inp1"
                name="beneficiaryname"
                value={level2.beneficiaryname}
                onChange={handleInputs}
              />
            </li>
            <li>
              <b>Beneficary Account Number</b> :
              <img
                src={volume_icon}
                className="volume_icon"
                alt="vol"
                style={{ height: "15px", marginLeft: "10px", cursor: 'pointer' }}
                onClick={() => {
                  audio2.loop = false;
                  audio2.play();
                }}
              />
              <input
                type="number"
                id="inp2"
                name="beneficiaryaccountnumber"
                value={level2.beneficiaryaccountnumber}
                onChange={handleInputs}
              />
            </li>
            <li>
              <b>Re-enter Beneficary Account Number</b> :
              <img
                src={volume_icon}
                className="volume_icon"
                alt="vol"
                style={{ height: "15px", marginLeft: "10px", cursor: 'pointer' }}
                onClick={() => {
                  audio3.loop = false;
                  audio3.play();
                }}
              />
              <input type="number" id="inp3" />{" "}
            </li>
          </ul>
        </div>
        <div className="list5">
          <ul>
            <li>
              <b>Amount</b> :{" "}
              <img
                src={volume_icon}
                className="volume_icon"
                alt="vol"
                style={{ height: "15px", marginLeft: "10px", cursor: 'pointer' }}
                onClick={() => {
                  audio4.loop = false;
                  audio4.play();
                }}
              />
              <input
                type="number"
                id="inp4"
                name="amount"
                value={level2.amount}
                onChange={handleInputs}
              />
            </li>
          </ul>
        </div>
        <div className="list6">
          <ul>
            <li>
              <b>Purpose </b>:{" "}
              <img
                src={volume_icon}
                className="volume_icon"
                alt="vol"
                style={{ height: "15px", marginLeft: "10px", cursor: 'pointer' }}
                onClick={() => {
                  audio5.loop = false;
                  audio5.play();
                }}
              />
            </li>
            <li>
              <select className="dropdown" style={{ marginLeft: '200px' }}>
                <option>Select Purpose</option>
                <option>Fees</option>
                <option>Rent</option>
                <option>Bills</option>
                <option>Others</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="list7">
          <ul>
            <li>
              <input type="checkbox" />
            </li>
            <li>I accept the terms and conditions</li>
            <img
              src={volume_icon}
              className="volume_icon"
              alt="vol"
              style={{ height: "15px", marginTop: '5px', marginLeft: "10px", cursor: 'pointer' }}
              onClick={() => {
                audio6.loop = false;
                audio6.play();
              }}
            />
          </ul>
        </div>
        <div className="list8">
          <ul style={{ marginTop: '20px', marginLeft: '90px' }}>
            <li>
              <button className="button-87" onClick={() => {
                handleAddEntry();


              }}>

                <b>Submit</b>
              </button>
            </li>
            <li>
              <button className="button-87">
                <b>Cancel</b>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
