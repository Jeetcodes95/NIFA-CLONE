"use client"

import HeaderTop from "@/components/HeaderTop/HeaderTop.js";
import Navbar from "@/components/Navbar/Navbar.js"
import Content from '@/components/Content/page.js'
import HomeSwiper from "@/components/HomeSwiper/page.js";
import Footer  from "@/components/Footer/page.js"

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
