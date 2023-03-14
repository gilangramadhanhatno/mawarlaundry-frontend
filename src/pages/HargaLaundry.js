import React from "react";
import DaftarHarga from "../components/DaftarHarga";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HargaLaundry() {
  return (
    <>
      <Navbar isCentered />
      <DaftarHarga />
      <Footer />
    </>
  );
}
