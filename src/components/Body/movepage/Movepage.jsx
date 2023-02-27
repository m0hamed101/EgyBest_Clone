import React from "react";
import themo from "../../../Assets/spiderman.jpg";
import "../movepage/move.css";
export const Movepage = () => {
    return (
        <div className="movecontaner">
            <div className="movedata">
                <div className="video">
                    <img src={themo} alt="moveimg" />
                </div>
                <div className="detels">
                    <text className="movehaed">spider-man: no way home </text>
                    <div className="tt">
                        <h1>التصنيف</h1>
                        <h2>لا يناسب الاطفال</h2>
                    </div>
                    <div className="tt">
                        <h1 >النوع</h1>
                        <h2>اكشن-دراما-خيال </h2>
                    </div>
                    <div className="tt">
                        <h1 >النقييم</h1>
                        <h2>voice 350,730 -- 8.8 </h2>
                    </div>
                    <div className="tt">
                        <h1 >المده</h1>
                        <h2>2:30:58 </h2>
                    </div>
                    <div className="tt">
                        <h1 >الجوده</h1>
                        <h2>bluray.1080 </h2>
                    </div>
                    <div className="tt">
                        <h1 >المترجم</h1>
                        <h2> شكرا اسلام الجزاوي</h2>
                    </div>
                    <div className="tt">
                        <h1 >التقين</h1>
                        <h2>80% </h2>
                    </div>
                </div>
                <div className="photo">
                    <img className="photoo" src={themo} alt="" />
                    <button>للمشاهده والتحميل </button>
                </div>
            </div>
        </div>
    )
}
