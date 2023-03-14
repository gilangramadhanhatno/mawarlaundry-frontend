import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import "./index.css";

export default function Navbar({ isCentered }) {
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [activeNav, setActiveNav] = useState("#beranda");

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  if (isCentered) {
    return (
      <nav className={navbarScroll ? "navbar fixed-top navbar-expand-lg navbar-scroll" : "navbar fixed-top navbar-expand-lg"}>
        <div className="container container-fluid">
          <Link className="navbar-brand mx-auto" to={"/"}>
            <img src={Logo} alt="Mawar Laundry" />
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className={navbarScroll ? "navbar fixed-top navbar-expand-lg navbar-scroll" : "navbar fixed-top navbar-expand-lg"}>
      <div className="container container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img src={Logo} alt="Mawar Laundry" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#beranda" className={activeNav === "#beranda" ? "nav-link active-link" : "nav-link "} onClick={() => setActiveNav("#beranda")} aria-current="page">
                BERANDA
              </a>
            </li>
            <li className="nav-item">
              <a href="#layanan-kami" className={activeNav === "#layanan-kami" ? "nav-link active-link" : "nav-link "} onClick={() => setActiveNav("#layanan-kami")}>
                LAYANAN KAMI
              </a>
            </li>
            <li className="nav-item">
              <Link to={"/harga-laundry"} className="nav-link ">
                DAFTAR HARGA
              </Link>
            </li>
            <li className="nav-item">
              <a href="#tentang-kami" className={activeNav === "#tentang-kami" ? "nav-link active-link" : "nav-link "} onClick={() => setActiveNav("#tentang-kami")}>
                TENTANG KAMI
              </a>
            </li>
            <li className="nav-item">
              <a href="#kontak" className={activeNav === "#kontak" ? "nav-link active-link" : "nav-link "} onClick={() => setActiveNav("#kontak")}>
                KONTAK
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
