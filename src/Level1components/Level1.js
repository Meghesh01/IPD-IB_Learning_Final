import React from "react";
import { useEffect } from "react";
import  { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Level1.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import L1_img from "./L1_img.PNG";
import captcha_img from "./captcha_img.PNG";
import login_icon from "./login_icon.png";
import { useLocation } from "react-router-dom";
import volume_icon from "./volume.png";
import sbilogo from "./sbi-logo.png";
import bounceArrow from "./bounce_arrow.png";
import partyPopper from "./party-popper.png";
import coins from "../images/coins.png";

import L1_WelcomeAudio from "./L1_WelcomeAudio.mp3";
import UsernameAudio from "./Username_audio.mp3";
import PasswordAudio from "./Password_audio.mp3";
import CaptchaAudio from "./Captcha_audio.mp3";
import SubmitAudio from "./Submit_audio.mp3";
import L1_CompletedAudio from "./L1_Completed_audio.mp3";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

// Multilingual
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import tEn from "../Languages/en/translation.json";
import tHi from "../Languages/hi/translation.json";
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



function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate()
    const navigateLevelsPage = () => {
          navigate('/LevelsPage',{state: {phone:props.phone}});
        }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ color: "white", backgroundColor: "black" }}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontStyle: "italic", marginLeft: "62px" }}
        >
          <img
            src={partyPopper}
            className="party_popper"
            alt="partypop"
            style={{ height: 40, marginRight: 10, marginBottom: 10 }}
          />
          CONGRATULATIONS
          <img
            src={partyPopper}
            className="party_popper"
            alt="partypop"
            style={{ height: 40, marginLeft: 10, marginBottom: 10 }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ backgroundColor: "lightGreen", textAlign: "center" }}
      >
        <h4 style={{ color: "darkGreen", fontSize: "30px" }}>
          Level 1 Completed !!!
        </h4>
        <p style={{ fontSize: "20px" }}>
          Heartily Congratulations for your first victory. You have successfully
          learnt to login.
        </p>
        <p
          style={{ fontSize: "20px", textAlign: "center" }}
          className="fw-bold"
        >
          Coins Earned:{" "}
          <img
            src={coins}
            className="coins"
            alt="coin"
            style={{ height: "40px" }}
          />{" "}
          20 pts
        </p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        {/* <Link to="/LevelsPage"> */}
          <button type="button" onClick = {navigateLevelsPage} class="btn btn-danger mx-2">
            Close
          </button>
        {/* </Link> */}
      </Modal.Footer>
    </Modal>
  );
}


export default function Level1() {
  const { t } = useTranslation();
  useEffect(() => {
    let currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
  }, []);

  const audio = new Audio(L1_WelcomeAudio);
  audio.play();

  const audio1 = new Audio(UsernameAudio);
  const audio2 = new Audio(PasswordAudio);
  const audio3 = new Audio(CaptchaAudio);
  const audio4 = new Audio(SubmitAudio);
  const audio5 = new Audio(L1_CompletedAudio);

  const [modalShow, setModalShow] = React.useState(false);


  const navigate = useNavigate();

  const [level1, setLevel1] = useState({
    username: "",
    
    password: "",
  
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setLevel1({ ...level1, [name]: value });
  };

  const PostData = async (e) => {
    // e.preventDefault();
    // alert("Hi");
    // console.log("HI");
    
    const { username,  password } = level1;
    // alert(username);
    const res = await fetch("/level1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
      
        password,
       
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      // window.alert("Successful Registration");
      console.log("Successful registration");

      // navigate("/Levelspage");
    }
  };
  // function post(){
  //   PostData();
  // }
  const location = useLocation();
  let phone = location.state.phone;
  const [points, setPoints] = useState(null);

  const updatePoints = async () => {
    const response = await fetch('updatepoints', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone })
    });

    const data = await response.json();
    setPoints(data.points);
  };
  return (
    <>
      <div id="Level1">
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
                  <Nav.Link href="/">
                    <img
                      src={login_icon}
                      className="login_icon"
                      alt="log-in"
                      style={{ height: 30, marginRight: 7 }}
                    />
                    <b>{t("login")}</b>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </section>

        <section style={{ marginTop: 60 }}>
          <ul className="nav-2">
            <li>{t("l1_t1")}</li>
            <li id="redline">{t("l1_t2")}</li>
            <li>{t("l1_t3")}</li>
          </ul>
        </section>
        <section>
          <div class="row" style={{ alignContent: "center" }}>
            <div class="column">
              <p id="redline">{t("l1_t4")}</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label   >
                    {t("user_name")}
                    <img
                      src={volume_icon}
                      className="volume_icon"
                      alt="vol"
                      style={{ height: "15px", marginLeft: "10px" }}
                      onClick={() => {
                        audio1.loop = false;
                        audio1.play();
                      }}
                    />
                    <img
                      src={bounceArrow}
                      className="arrow bounce"
                      alt="arrow"
                    />
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" name="username"
                value={level1.username}
                onChange={handleInputs}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label  >
                    {t("password")}
                    <img
                      src={volume_icon}
                      className="volume_icon"
                      alt="vol"
                      style={{ height: "15px", marginLeft: "10px" }}
                      onClick={() => {
                        audio2.loop = false;
                        audio2.play();
                      }}
                    />
                  </Form.Label>
                  <Form.Control type="password" placeholder="Password"  
                  name="password"
                  value={level1.password}
                  onChange={handleInputs}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCaptcha">
                  <Form.Label>
                    {t("enter_text")}
                    <img
                      src={volume_icon}
                      className="volume_icon"
                      alt="vol"
                      style={{ height: "15px", marginLeft: "10px" }}
                      onClick={() => {
                        audio3.loop = false;
                        audio3.play();
                      }}
                    />
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" />
                  <img
                    src={captcha_img}
                    className="captcha_img"
                    alt="img_captcha"
                    style={{ marginTop: "10px" }}
                  />
                </Form.Group>

                <Button
                  style={{ width: "100px", marginRight: "10px" }}
                  // onClick={() => {
                  //   setModalShow(true);
                  //   audio5.loop = false;
                  //   audio5.play();
                  //   PostData();
                  // }}
                  onClick={() => { 
                    PostData();
                    updatePoints();
                    setModalShow(true) ; 
                    audio5.loop = false; 
                    audio5.play(); } }
                >
                  {t("submit")}
                </Button>
                <MyVerticallyCenteredModal 
                  phone = {phone}
                  show={modalShow}
                  // onHide={() => setModalShow(false)}
                />
                <Button
                  variant="primary"
                  type="reset"
                  style={{ width: "100px", marginRight: "5px" }}
                >
                  {t("reset")}
                </Button>
                <img
                  src={volume_icon}
                  className="volume_icon"
                  alt="vol"
                  style={{ height: "15px", marginLeft: "10px" }}
                  onClick={() => {
                    audio4.loop = false;
                    audio4.play();
                  }}
                />
                <p style={{ marginTop: "15px", fontSize: "13px" }}>
                  {t("l1_last_text")}
                </p>
              </Form>
            </div>
            <div class="column">
              <img
                src={L1_img}
                className="L1_img"
                alt="img2"
                style={{ width: "90%" }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
