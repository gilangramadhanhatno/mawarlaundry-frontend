import React from "react";
import { Link } from "react-router-dom";
import LaundryKiloan from "../../assets/layanan-kami/laundry-kiloan.png";
import LaundrySatuan from "../../assets/layanan-kami/laundry-satuan.png";
import LaundrySepatu from "../../assets/layanan-kami/laundry-sepatu.png";

import "./index.css";

export default function LayananKami() {
  return (
    <div className="layanan-kami">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 d-flex justify-content-center align-items-center flex-column">
            <h2 className="judul">Layanan Kami</h2>
            <p className="description">Cukup diam ditempat kami antar jemput</p>
          </div>
          <div className="col-lg-3 col-md-4 d-flex justify-content-center align-items-center">
            <div className="card">
              <Link to="/laundry-kiloan" className="link">
                <div className="img_wrapper">
                  <img src={LaundryKiloan} alt="..." />
                </div>
                <div className="layanan">
                  <p>Laundry Kiloan</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 d-flex justify-content-center align-items-center">
            <div className="card">
              <Link to="/laundry-satuan" className="link">
                <div className="img_wrapper">
                  <img src={LaundrySatuan} alt="..." />
                </div>
                <div className="layanan">
                  <p>Laundry Kiloan</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 d-flex justify-content-center align-items-center">
            <div className="card">
              <Link to="/laundry-sepatu" className="link">
                <div className="img_wrapper">
                  <img src={LaundrySepatu} alt="..." />
                </div>
                <div className="layanan">
                  <p>Laundry Kiloan</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
