import React from "react";
import TempatKami from "../../assets/tentang-kami.png";

import "./index.css";

export default function TentangKami() {
  return (
    <div id="tentang-kami" className="tentang-kami">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-flex justify-content-center">
            <div className="img-wrapper">
              <img src={TempatKami} alt="Tentang Kami" />
            </div>
          </div>
          {/* <div className="col-lg-1"></div> */}
          <div className="tentang col-lg-9 col-md-12">
            <div className="text">
              <h2 className="judul">Tentang Kami</h2>
            </div>
            <div className="description">
              <p>
                Mawar Laundry adalah jasa laundry kiloan, laundry satuan & jasa cuci sepatu yang berada di jalan Gotong Royong 3 Gandaria Utara Kebayoran Baru Jakarta Selatan. Kami menyedikan berbagai layanan laundry untuk meringankan
                rutinitas kegiatan mencuci, setrika pakaian setiap harinya.
              </p>
              <p>
                Untuk anda yang sibuk dan tidak sempat datang untuk mengantarkan cucian kotor ke tempat kami, tidak perlu khawatir kami memberikan layanan antar-jemput. Anda bisa langsung hubungi kami melalui kontak atau booking, lalu tim
                kami akan melakukan penjemputan kerumah anda, ketika laundry selesai kami akan mengantarkan kembali kerumah anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
