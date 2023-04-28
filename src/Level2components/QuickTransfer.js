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
    accountnumber: "",
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
  // const navigate = useNavigate();
  const PostData = async (e) => {
     alert("Hi");
    console.log("HI");
    const { accountnumber, beneficiaryname, beneficiaryaccountnumber, amount } =
      level2;
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

      navigate("/Levelspage");
    }
  };
  const [user, setUser] = useState({});
  const date = new Date();
  // let phone = 9867075589;
  const location = useLocation();
  let phone = location.state.phone;
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
  
  // const navigate = useNavigate()
  //   const navigateLevelsPage = () => {
  //     console.log(phone);
  //         navigate('/LevelsPage',{state: {phone:phone}});

  //       }
  useEffect(() => {
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
          checked={accountNumber === "60003200024"}
          onChange={handleChange}/>{" "}
              60003200024
            </li>
            <li>Savings</li>
            <li>Vile parle</li>
            <li>
              <img className="rupeeblack" src={rupeeblack} />
              54000
            </li>
          </ul>
        </div>
        <div className="list3">
          <ul>
            <li>
              <b>Selected account number :</b>
            </li>
            <li>2036155608</li>
          </ul>
        </div>
        <div className="list4">
          <ul>
            <li>
              <b>Beneficary Name </b>:
              <input
                type="text"
                className="inp1"
                name="beneficiaryname"
                value={level2.beneficiaryname}
                onChange={handleInputs}
              />
            </li>
            <li>
              <b>Beneficary Account Number</b> :
              <input
                type="number"
                className="inp2"
                name="beneficiaryaccountnumber"
                value={level2.beneficiaryaccountnumber}
                onChange={handleInputs}
              />
            </li>
            <li>
              <b>Re-enter Beneficary Account Number</b> :
              <input type="number" className="inp3" />{" "}
            </li>
          </ul>
        </div>
        <div className="list5">
          <ul>
            <li>
              <b>Amount</b> :{" "}
              <input
                type="number"
                className="inp4"
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
            </li>
            <li>
              <select className="dropdown">
                <option>Select Purpose</option>
                <option>Fees</option>
                <option>Rent</option>
                <option>Bills</option>
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
          </ul>
        </div>
        <div className="list8">
          <ul>
            <li>
              <button className="button-87"  onClick={() => { PostData(); 
                   
                  
                 } }>
                  
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
