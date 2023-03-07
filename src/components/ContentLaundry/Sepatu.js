import React from "react";
import { Link } from "react-router-dom";
import imgSepatu from "../../assets/layanan-kami/laundry-sepatu.png";

import "./index.css";

export default function Sepatu() {
  return (
    <section className="sepatu">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="jasa">Jasa Laundry Sepatu</h2>
            <div className="img-wrapper ">
              <img src={imgSepatu} alt="Laundry Sepatu" />
            </div>
            <div className="description">
              <p>
                <span>Tahukah anda kesalahan kabanyakan orang saat mencuci sepatu?</span>
                <br /> Kesalahan atau pemahaman yang keliru yang sering dilakukan adalah mencuci sepatu direndam, dicuci basah dengan deterjen pakaian. Cara seperti itu akan mempersingkat keawetan dari sepatu karena penggunaan chemical yang
                tidak tepat pada bahan sepatu dapat mengakibatkan pudarnya warna atau kerusakan pada bahan sepetu tersebut, dengan pemakaian air yang berlebihan juga kan mengakibatkan sol pada sepatu mudah terbuka.
              </p>
              <p>
                Sepatu sebagai alas kaki yang berguna untuk melindungi mata tapi banyak sepatu-sepatu yang menjadi pelengkap style agar penampilan lebih menarik. Jenis-jenis sepatu pun pasti beragam, perawatannya pun atau cara mencuci
                sepatu tentu akan disesuaikan dengan bahan sepatu tersebut. Bahan sepatu suede (bahan sepatu yang berasal dari kulit hewan) akan beda cara membersihkannya dengan jenis sepatu sneaker yang gampang kotor.
              </p>
            </div>
            <Link to="/harga-paket">
              <button className="btn btn-paket">LIHAT PAKET HARGA LAUNDRY</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
