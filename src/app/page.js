"use client"

import HeaderTop from "../../src/components/HeaderTop/HeaderTop.js";
import Navbar from "../../src/components/Navbar/Navbar.js"
import Content from '../../src/components/Content/page.js'
import HomeSwiper from "../../src/components/HomeSwiper/page.js";
import Footer  from "../../src/components/Footer/page.js"

export default function Home() {
  

  return (
    <>
      <div className="Container h-full w-full">
        <HeaderTop />
        <Navbar />
        <HomeSwiper />
        <Content />
        <Footer/>
      </div>
    </>
  );
}
