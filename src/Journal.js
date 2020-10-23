import React from "react";
import "./Journal.css";

import castle from "./images/journal/lon-edi/castle.jpg";
import edi_street from "./images/journal/lon-edi/edi-street.jpg";
import lights from "./images/journal/lon-edi/lights.jpg";
import museum from "./images/journal/lon-edi/museum.jpg";
import lon_street from "./images/journal/lon-edi/lon-street.jpg";

import sf1 from "./images/journal/sf/sf1.jpg";
import sf2 from "./images/journal/sf/sf2.jpg";
import sf3 from "./images/journal/sf/sf3.jpg";
import sf4 from "./images/journal/sf/sf4.jpg";
import sf5 from "./images/journal/sf/sf5.jpg";
import sf6 from "./images/journal/sf/sf6.jpg";

import la1 from "./images/journal/la/la1.JPG";
import la2 from "./images/journal/la/la2.JPG";
import la3 from "./images/journal/la/la3.JPG";
import la4 from "./images/journal/la/la4.JPG";
import la5 from "./images/journal/la/la5.JPG";
import la6 from "./images/journal/la/la6.JPG";
import la7 from "./images/journal/la/la7.JPG";

import vegas1 from "./images/journal/daynvegas/vegas1.png";
import vegas2 from "./images/journal/daynvegas/vegas2.jpg";
import vegas3 from "./images/journal/daynvegas/vegas3.jpg";
import vegas4 from "./images/journal/daynvegas/vegas4.jpg";
import vegas5 from "./images/journal/daynvegas/vegas5.jpg";
import vegas6 from "./images/journal/daynvegas/vegas6.jpg";
import vegas7 from "./images/journal/daynvegas/vegas7.jpg";
import vegas8 from "./images/journal/daynvegas/vegas8.jpg";
import vegas9 from "./images/journal/daynvegas/vegas9.jpg";
import vegas10 from "./images/journal/daynvegas/vegas10.jpg";
import vegas11 from "./images/journal/daynvegas/vegas11.jpg";
import vegas12 from "./images/journal/daynvegas/vegas12.jpg";
import vegas13 from "./images/journal/daynvegas/vegas13.jpg";
import vegas14 from "./images/journal/daynvegas/vegas14.jpg";
import vegas15 from "./images/journal/daynvegas/vegas15.jpg";

import jp1 from "./images/journal/jp/jp1.jpeg";
import jp2 from "./images/journal/jp/jp2.jpeg";
import jp3 from "./images/journal/jp/jp3.jpeg";
import jp4 from "./images/journal/jp/jp4.jpeg";
import jp5 from "./images/journal/jp/jp5.jpeg";
import jp6 from "./images/journal/jp/jp6.jpeg";
import jp7 from "./images/journal/jp/jp7.jpeg";
import jp8 from "./images/journal/jp/jp8.jpeg";
import jp9 from "./images/journal/jp/jp9.jpeg";
import jp10 from "./images/journal/jp/jp10.jpeg";
import jp11 from "./images/journal/jp/jp11.jpeg";
import jp12 from "./images/journal/jp/jp12.jpeg";
import jp13 from "./images/journal/jp/jp13.jpeg";
import jp14 from "./images/journal/jp/jp14.jpeg";
import jp15 from "./images/journal/jp/jp15.jpeg";
import jp16 from "./images/journal/jp/jp16.jpeg";
import jp17 from "./images/journal/jp/jp17.jpeg";
import jp18 from "./images/journal/jp/jp18.jpeg";
import jp19 from "./images/journal/jp/jp19.jpeg";

export default function Journal() {
  return (
    <div className="journal-page">
      <div className="journal-entry">
        <div className="entry-details">
          <h1>LONDON & EDINBURGH</h1>
          <h2>03.2020</h2>
        </div>
        <div className="entry-photos">
          <img src={castle} alt="castle" className="photo" />
          <img src={edi_street} alt="edi_street" className="photo" />
          <img src={lights} alt="lights" className="photo" />
          <img src={museum} alt="museum" className="photo" />
          <img src={lon_street} alt="lon_street" className="photo" />
        </div>
      </div>
      <div className="journal-entry">
        <div className="entry-details">
          <h1>SAN FRANCISCO</h1>
          <h2>01.2020</h2>
        </div>
        <div className="entry-photos">
          <img src={sf1} alt="sf1" className="photo" />
          <img src={sf2} alt="sf2" className="photo" />
          <img src={sf3} alt="sf3" className="photo" />
          <img src={sf4} alt="sf4" className="photo" />
          <img src={sf5} alt="sf5" className="photo" />
          <img src={sf6} alt="sf6" className="photo" />
        </div>
      </div>
      <div className="journal-entry">
        <div className="entry-details">
          <h1>LOS ANGELES</h1>
          <h2>01.2020</h2>
        </div>
        <div className="entry-photos">
          <img src={la1} alt="la1" className="photo" />
          <img src={la2} alt="la2" className="photo" />
          <img src={la3} alt="la3" className="photo" />
          <img src={la4} alt="la4" className="photo" />
          <img src={la5} alt="la5" className="photo" />
          <img src={la6} alt="la6" className="photo" />
          <img src={la7} alt="la7" className="photo" />
        </div>
      </div>
      <div className="journal-entry">
        <div className="entry-details">
          <h1>DAY N VEGAS</h1>
          <h2>11.2019</h2>
        </div>
        <div className="entry-photos">
          <img src={vegas1} alt="vegas1" className="photo" />
          <img src={vegas2} alt="vegas2" className="photo" />
          <img src={vegas3} alt="vegas3" className="photo" />
          <img src={vegas4} alt="vegas4" className="photo" />
          <img src={vegas5} alt="vegas5" className="photo" />
          <img src={vegas6} alt="vegas6" className="photo" />
          <img src={vegas7} alt="vegas7" className="photo" />
          <img src={vegas8} alt="vegas8" className="photo" />
          <img src={vegas9} alt="vegas9" className="photo" />
          <img src={vegas10} alt="vegas10" className="photo" />
          <img src={vegas11} alt="vegas11" className="photo" />
          <img src={vegas12} alt="vegas12" className="photo" />
          <img src={vegas13} alt="vegas13" className="photo" />
          <img src={vegas14} alt="vegas14" className="photo" />
          <img src={vegas15} alt="vegas15" className="photo" />
        </div>
      </div>
      <div className="journal-entry">
        <div className="entry-details">
          <h1>JAPAN</h1>
          <h2>05.2019</h2>
        </div>
        <div className="entry-photos">
          <img src={jp1} alt="jp1" className="photo" />
          <img src={jp2} alt="jp2" className="photo" />
          <img src={jp3} alt="jp3" className="photo" />
          <img src={jp4} alt="jp4" className="photo" />
          <img src={jp5} alt="jp5" className="photo" />
          <img src={jp6} alt="jp6" className="photo" />
          <img src={jp7} alt="jp7" className="photo" />
          <img src={jp8} alt="jp8" className="photo" />
          <img src={jp9} alt="jp9" className="photo" />
          <img src={jp10} alt="jp10" className="photo" />
          <img src={jp11} alt="jp11" className="photo" />
          <img src={jp12} alt="jp12" className="photo" />
          <img src={jp13} alt="jp13" className="photo" />
          <img src={jp14} alt="jp14" className="photo" />
          <img src={jp15} alt="jp15" className="photo" />
          <img src={jp16} alt="jp16" className="photo" />
          <img src={jp17} alt="jp17" className="photo" />
          <img src={jp18} alt="jp18" className="photo" />
          <img src={jp19} alt="jp19" className="photo" />
        </div>
      </div>
    </div>
  );
}
