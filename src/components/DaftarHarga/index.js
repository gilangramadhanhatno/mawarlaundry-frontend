import React from "react";
import imgKiloan from "../../assets/layanan-kami/laundry-kiloan.png";
import imgSatuan from "../../assets/layanan-kami/laundry-satuan.png";
import imgSepatu from "../../assets/layanan-kami/laundry-sepatu.png";
import "./index.css";

export default function DaftarHarga() {
  return (
    <section className="daftar-harga">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="harga">Daftar Harga Mawar Laundry</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row d-flex justify-content-center align-items-end">
                <div className="col-lg-2">
                  <div className="img-wrapper">
                    <img src={imgKiloan} alt="Laundry Kiloan" />
                  </div>
                </div>
                <div className="col">
                  <h4 className="m-0">Laundry Kiloan (Minimal 3Kg)</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10">
                  <table className="table table-bordered table-hover">
                    <tbody>
                      <tr>
                        <td className="nama-paket">Cuci + Setrika (3 hari/lebih)</td>
                        <td className="harga-paket">Rp 8.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Cuci + Setrika (2 hari)</td>
                        <td className="harga-paket">Rp 10.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Cuci + Setrika (1 hari)</td>
                        <td className="harga-paket">Rp 12.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Cuci Lipat (3 hari/lebih)</td>
                        <td className="harga-paket">Rp 7.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Cuci Lipat (2 hari)</td>
                        <td className="harga-paket">Rp 9.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Cuci Lipat (1 hari)</td>
                        <td className="harga-paket">Rp 11.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Setrika Saja (3 hari/lebih)</td>
                        <td className="harga-paket">Rp 6.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Setrika Saja (2 hari)</td>
                        <td className="harga-paket">Rp 8.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Setrika Saja (1 hari)</td>
                        <td className="harga-paket">Rp 10.000/kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row d-flex justify-content-center align-items-end">
                <div className="col-lg-2">
                  <div className="img-wrapper">
                    <img src={imgSatuan} alt="Laundry Satuan" />
                  </div>
                </div>
                <div className="col">
                  <h4 className="m-0">Laundry Satuan</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10">
                  <table className="table table-bordered table-hover">
                    <tbody>
                      <tr>
                        <td className="nama-paket">Kemeja Panjang</td>
                        <td className="harga-paket">Rp 20.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Kemeja Pendek</td>
                        <td className="harga-paket">Rp 15.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Tas Kain</td>
                        <td className="harga-paket">Rp 15.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Tas Ransel</td>
                        <td className="harga-paket">Rp 20.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Selimut Tipis</td>
                        <td className="harga-paket">Rp 20.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Selimut Tebal</td>
                        <td className="harga-paket">Rp 23.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Bad Cover Besar</td>
                        <td className="harga-paket">Rp 35.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Bad Cover Sedang</td>
                        <td className="harga-paket">Rp 30.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Bad Cover Kecil</td>
                        <td className="harga-paket">Rp 20.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Keset</td>
                        <td className="harga-paket">Rp 10.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Jaket/Sweater</td>
                        <td className="harga-paket">Rp 20.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Bantal Guling</td>
                        <td className="harga-paket">Rp 20.000/kg</td>
                      </tr>
                      <tr>
                        <td className="nama-paket">Bantal Tidur</td>
                        <td className="harga-paket">Rp 20.000/kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row d-flex justify-content-center align-items-end">
                <div className="col-lg-2">
                  <div className="img-wrapper">
                    <img src={imgSepatu} alt="Laundry Sepatu" />
                  </div>
                </div>
                <div className="col">
                  <h4 className="m-0">Laundry Sepatu</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10">
                  <table className="table table-bordered table-hover">
                    <tbody>
                      <tr>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
