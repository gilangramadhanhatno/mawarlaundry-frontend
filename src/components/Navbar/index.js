import React from "react";
import Logo from "../../assets/logo.png";

import "./index.css";

export default function Navbar() {
  return (
    <header id="home" className="header_wrapper">
      {/* Navbar */}
      <nav className="navbar fixed-top  navbar-expand-lg ">
        <div className="container container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Mawar Laundry" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  BERANDA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  LAYANAN KAMI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  TENTANG KAMI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  KONTAK
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
