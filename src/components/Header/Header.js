import React from "react";
import logo from "../../Assets/egybest_logo2.png";
import accountIcon from "../../Assets/AccountIcon2.png";
import '../Header/Header.css';

export const Header = () => {
    return (
        <div className="Header">
        <div className="account"><img className="accountimg" src={accountIcon}/></div>
        <div className="sections">
        <ul>
        <li ><a className="hover-underline-animation" href="#">الرئيسيه</a></li>
        <li ><a className="hover-underline-animation" href="#">الاكثر مشاهده</a></li>
        <li ><a className="hover-underline-animation" href="#">افلام</a></li>
        <li ><a className="hover-underline-animation" href="#">مسلسلات</a></li>
        <li ><a className="hover-underline-animation" href="#">مصارعه حره</a></li>
        <li ><a className="hover-underline-animation" href="#">مسرحيات</a></li>
        </ul>
        </div>
        <div className="logo"><img src={logo} /></div>
                </div>
    );
};
