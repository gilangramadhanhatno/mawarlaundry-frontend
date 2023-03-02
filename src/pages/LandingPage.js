import React from "react";
import Header from "../components/Header/index";
import LayananKami from "../components/LayananKami/index";
import TentangKami from "../components/TentangKami";
import Kontak from "../components/Kontak/index";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <LayananKami />
      <TentangKami />
      <Kontak />
      <Footer />
    </>
  );
}
