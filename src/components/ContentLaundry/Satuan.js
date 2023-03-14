import React from "react";
import { Link } from "react-router-dom";
import imgSatuan from "../../assets/layanan-kami/laundry-satuan.png";

import "./index.css";

export default function Satuan() {
  return (
    <section className="satuan">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="jasa">Jasa Laundry Satuan</h2>
            <div className="img-wrapper ">
              <img src={imgSatuan} alt="Laundry Satuan" />
            </div>
            <div className="description">
              <p>
                Selain laundry kiloan, kami juga menyediakan layanan laundry satuan seperti pakaian kerja (kemeja kerja, celana kerja, dasi), jaket, blazer, baju muslim, baju batik, bantal, guling, sprei, bed cover dll. Kenapa harus di
                laundry satuan?
              </p>
              <p>
                Pakaian yang bukan dipakai sehari-hari tentunya digunakan pada saat2 tertentu dan harus sangat terjaga kebersihannya, harus diperlakukan khusus sesuai dengan jenis bahannya. Dengan layanan laundry satuan pelanggan tidak
                perlu khawatir pakaiannya akan terkena luntur/kerusakan yang lainnya, pengerjaan laundry satuan lebih detail dan teliti.. Untuk laundry satuan kami memiliki harga yang bervariatif sesuai jenis pakaian, Silahkan lihat harga
                layanan laundry kami dan disesuaikan dengan kebutuhan laundry anda. Apabila anda tidak menemukan jasa laundry yang diinginkan, silahkan menghubungi kami.
              </p>
              <p>Mawar Laundry melayani jasa laundry di wilayah Kebayoran Baru dan sekitarnya (Gunung, Keramat Pela, Gandaria Utara, Cipete Utara, Pulo, Melawai, Petogogan)</p>
            </div>
            <Link to="/harga-laundry">
              <button className="btn btn-paket">LIHAT PAKET HARGA LAUNDRY</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
