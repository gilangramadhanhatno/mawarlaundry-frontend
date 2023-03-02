import React from "react";
import Header from "../components/Header/index";
import Kontak from "../components/Kontak/index";
import LayananKami from "../components/LayananKami/index";
import TentangKami from "../components/TentangKami";

export default function LandingPage() {
  return (
    <>
      <Header />
      <LayananKami />
      <TentangKami />
      <Kontak />  
    </>
  );
}
