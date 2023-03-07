import React from "react";
import Navbar from "../Navbar";

import "./index.css";

export default function Header() {
  return (
    <header id="home" className="header_wrapper">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <div className="banner_wrapper">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text_wrapper">
                <h2>
                  Cuci & Setrika <br /> dijemput & diantar <br /> ke pintu Anda
                </h2>
                <button className="btn btn-pickup">JADWALKAN PENGAMBILAN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
