import React, { useEffect, useState } from "react";
import "./Mainpage1.scss";
import Navbarmainpage from "./Navbarmainpage";
import { Link, useLocation } from "react-router-dom";

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

export default function Mainpage() {
  const { t } = useTranslation();
  useEffect(() => {
    let currentLang = localStorage.getItem("lang");
    i18n.changeLanguage(currentLang);
  }, []);
  const [user, setUser] = useState({});
  const date = new Date();
  // let phone = 9867075589;
  const location = useLocation();
  let phone = location.state.phone;
  const userData = async (e) => {
    //e.preventDefault();
    // const { phone:phone} = user;
    console.log("user");
    console.log(location.state);
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
  const navigate = useNavigate()
    const navigateDebitCard = () => {
          navigate('/Viewdebitcard',{state: {phone:user.phone}});
        }

  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      <div id="main-page">

        <Navbarmainpage
          name={user.name}
          phone={user.phone}
          points={user.points}
          money={user.money}
        />

        <Navbarmainpage name={user.name} phone={user.phone} points = {user.points} money = {user.money}/>

        <div className="container">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        className="rounded-circle"
                        width="150"
                      />
                      <div className="mt-3">
                        <h4>{user.name}</h4>
                        <p className="text-secondary mb-1">
                          {t("mainpage_t1")}
                        </p>
                        <p className="text-muted font-size-sm">
                          {user.city},{user.state}
                        </p>
                        <Link to="/LevelsPage">
                          <button type="button" class="btn btn-success mx-2">
                            {t("start")}
                          </button>
                        </Link>
                        <Link to="/">
                          <button type="button" class="btn btn-danger mx-2">
                            {t("logout")}
                          </button>
                        </Link>
                        <button type="button" class="btn btn-primary mx-2">
                          {t("uploadphoto")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h3 className="mb-0">
                        <b>{t("acc_det")}</b>
                      </h3>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">{t("acc_no")}</h6>
                      <span className="text-secondary">
                        {user.accountNumber}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">{t("cif_no")}</h6>
                      <span className="text-secondary">SBINI004</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">{t("your_bank")}</h6>
                      <span className="text-secondary">{t("bank")}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <div class="d-grid gap-2 col-10 mx-auto">
                        <Link to="/Viewpassbook">
                          <button class="button-39">{t("view_pb")}</button>
                        </Link>
                        
                          <button onClick={navigateDebitCard} class="button-40">{t("view_db")}</button>
                        
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-center">
                        <h3 className="mb-0">
                          <b>{t("prof_det")}</b>
                        </h3>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">{t("full_name")}</h6>
                      </div>
                      <div className="col-sm-9 ">{user.name}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">{t("mob")}</h6>
                      </div>
                      <div className="col-sm-9 ">{user.phone}</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">{t("email")}</h6>
                      </div>
                      <div className="col-sm-9 ">{user.email}</div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-center">
                        <h3 className="mb-0">
                          <b>{t("add_det")}</b>
                        </h3>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">{t("dob")}</h6>
                      </div>
                      <div className="col-sm-9 ">
                        {new Date(user.dob).toDateString()}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">{t("age")}</h6>
                      </div>
                      <div className="col-sm-9 ">
                        {date.getFullYear() - new Date(user.dob).getFullYear()}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">{t("cvt")}</h6>
                      </div>
                      <div className="col-sm-9 ">{user.city}</div>
                    </div>
                    {/* <hr /> */}
                    {/* <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">District</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                            Thane
                                        </div>
                                    </div> */}
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">{t("state")}</h6>
                      </div>
                      <div className="col-sm-9">{user.state}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
