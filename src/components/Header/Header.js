import React, { useState } from "react";
import logo from "../../Assets/egybest_logo2.png";
import accountIcon from "../../Assets/AccountIcon2.png";
import "../Header/Header.css";
import CustomizedSwitches from "../buttons/DarkModeBtn";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const [isActive,setActive]=useState(false)

  function hander(){
    setActive(!isActive)
  }
  return (
    <div className={`Header ${props.dark ? "dark" : ""}`}>
      <div onClick={hander} className="manu">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="account">
        <img className="accountimg" src={accountIcon} alt='account-icon' />
      </div>
      <div className={"" + (isActive ? "active" : "sections")}>
        <ul>
          <li>
            <Link className="hover-underline-animation" to="/">
              الرئيسيه
            </Link>
          </li>
          <li>
            <Link className="hover-underline-animation" to="/">
              الاكثر مشاهده
            </Link>
          </li>
          <li>
            <Link className="hover-underline-animation" to="/">
              افلام
            </Link>
          </li>
          <li>
            <Link className="hover-underline-animation" to="/">
              مسلسلات
            </Link>
          </li>
          <li>
            <Link className="hover-underline-animation" to="/">
              مصارعه حره
            </Link>
          </li>
          <li>
            <Link className="hover-underline-animation" to="/">
              مسرحيات
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt='site-logo' />
        </Link>
        <CustomizedSwitches dark={props.dark} setDark={props.setDark} />
      </div>
    </div>
  );
};
