"use client"

import HeaderTop from "@/Components/HeaderTop/HeaderTop";
import Navbar from "@/Components/Navbar/Navbar"
import Content from '@/Components/Content/page'
import HomeSwiper from "@/Components/HomeSwiper/page";
import Footer  from "@/Components/Footer/page"

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
