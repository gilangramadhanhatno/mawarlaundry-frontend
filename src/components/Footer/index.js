import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import iconIg from "../../assets/instagram.jpg";

import "./index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="Mawar Laundry" />
            </a>
          </div>
          <div className="col-lg-2 col-sm-12">
            <h3>Layanan Kami</h3>
            <ul className="list-group">
              <li>
                <Link to="/laundry-kiloan">Laundry Kiloan</Link>
              </li>
              <li>
                <Link to="/laundry-satuan">Laundry Satuan</Link>
              </li>
              <li>
                <Link to="/laundry-sepatu">Laundry Sepatu</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-12 jam-buka">
            <h3>Jam Buka</h3>
            <div className="row">
              <div className="col hari">
                <ul className="list-group">
                  <li>
                    <a href="/">Setiap Hari</a>
                  </li>
                </ul>
              </div>
              <div className="col jam">
                <ul className="list-group">
                  <li>08:00 - 20:00</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 text-center">
            <h3 className="alamat">
              Jln.Gotong Royong ||| No.41,Gandaria Utara, <br />
              Kebayoran Baru, <br />
              Jakarta Selatan, Indonesia
            </h3>
            <div className="row medsos">
              <div className="col">
                <a href="/">
                  <img src={iconIg} alt="" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
