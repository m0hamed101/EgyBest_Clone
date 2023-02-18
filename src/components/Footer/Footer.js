import React from "react";
import "../Footer/Footer.css";


export const Footer = (props) => {
  return (
    <div className="footer">
    <div className={`footer_section ${props.dark ? 'dark' : ''}`}>
    <ul className="f_parts">
          <i className="fa-thin fa-moon"></i>
          
          <li>
            <a>مسلسلات</a>
          </li>
          
          <li>
            <a>افلام</a>
          </li>
          
          <li>
            <a>مصارعه حره</a>
          </li>
          
          <li>
            <a>الاكثر مشاهده</a>
          </li>
          
          <li>
            <a>الرئيسيه</a>
            </li>
            
            <li>
            <a>ايجي بيست</a>
            </li>
            <li>
            <a></a>
            </li>
            </ul>
            </div>
            <div className={`touch_us ${props.dark ? 'darkblue' : ''}`}>
              تابعنا
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-twitter"></i>
            </div>
    </div>
  );
};
