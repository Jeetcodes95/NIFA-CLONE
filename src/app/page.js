"use client"

import HeaderTop from "@/components/HeaderTop/HeaderTop";
import Navbar from "@/components/Navbar/Navbar"
import Content from '@/components/Content/page'
import HomeSwiper from "@/components/HomeSwiper/page";
import Footer  from "@/components/Footer/page"

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
