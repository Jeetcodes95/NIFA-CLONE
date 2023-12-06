import Link from 'next/link';
import React from 'react'

const page = () => {

    const footerMenu = [
      {
        id: 1,
        head: "Company",
        subMenu: [
          {
            name: "About",
            path: "/",
          },
          {
            name: "Facilities",
            path: "/",
          },
          {
            name: "Career",
            path: "/",
          },
          {
            name: "Contact Us",
            path: "/",
          },
          {
            name: "Terms & Conditions",
            path: "/",
          },
          {
            name: "Refund Policy",
            path: "/",
          },
          {
            name: "Privacy Policy",
            path: "/",
          },
        ],
      },
      {
        id: 2,
        head: "Activities",
        subMenu: [
          {
            name: "Art Gallery",
            path: "/",
          },
          {
            name: "Workshops",
            path: "/",
          },
          {
            name: "Outdoor Activities",
            path: "/",
          },
          {
            name: "Media Coverage",
            path: "/",
          },
          {
            name: "Art Events",
            path: "/",
          },
          {
            name: "Exhibition",
            path: "/",
          },
          {
            name: "Daily Activities",
            path: "/",
          },
        ],
      },
      {
        id: 2,
        head: "Popular Course",
        subMenu: [
          {
            name: "Diploma In Fine Arts",
            path: "/",
          },
          {
            name: "Certificate Hobby Course",
            path: "/",
          },
          {
            name: "Entrance Preparation",
            path: "/",
          },
          {
            name: "BFA",
            path: "/",
          },
          {
            name: "Animation Sketching",
            path: "/",
          },
          {
            name: "Kids Diploma",
            path: "/",
          },
        ],
      },
      {
        id: 2,
        head: "Our Locations",
        subMenu: [
          {
            name: "Gurgaon (Dlf Phase - 4)",
            path: "/",
          },
          {
            name: "Mumbai (Andheri West)",
            path: "/",
          },
          {
            name: "South Delhi (Kailash Colony)",
            path: "/",
          },
          {
            name: "London",
            path: "/",
          },
          {
            name: "USA",
            path: "/",
          },
          {
            name: "Dubai, UAE",
            path: "/",
          },
        ],
      },
    ];

  return (
    <>
      <div className="w-full h-auto pt-11  max-md:pb-10 pb-28 float-left flex flex-col justify-center items-center  bg-cover bg-no-repeat  bg-[url('https://www.nifafinearts.com/images/fotbg2.jpeg')]">
        <div className="flex justify-around max-md:grid grid-cols-2 items-start  w-10/12 ">
          {footerMenu.map((val, id) => (
            <ul key={id} className="flex flex-col ">
              <h3 className='font-["spartan"] font-bold max-md:text-xl '>
                {val.head}
              </h3>
              <div className="flex flex-col max-md:gap-0 mt-4 gap-2">
                {val.subMenu.map((elem, id) => (
                  <Link
                    key={id}
                    href="#"
                    className='font-["spartan"] text-sm font-medium float-left hover:text-pink-600'
                  >
                    {elem.name}
                  </Link>
                ))}
              </div>
            </ul>
          ))}
        </div>
        <div className="flex max-md:flex-col   max-md:w-full justify-between items-center w-9/12">
          <div className="mt-14 max-md:mt-6 max-md:p-6 ">
            <h3 className='font-["spartan"] max-md:text-xl  py-2 text-base font-semibold'>
              NIFA Is A Unit Of Nifaedutech Pvt Ltd.
              <br />
              Connect With Us
            </h3>
            <span className='font-["spartan"]'>9555112200,9810130552</span>
            <br />
            <span className='font-["spartan"]'>admission@nifafinearts.com</span>
            <ul className=" flex gap-8">
              <li className="text-3xl text-blue-700">
                <a href="#">
                  <i className="ri-facebook-circle-fill"></i>
                </a>
              </li>
              <li className="text-3xl text-sky-400">
                <a href="#">
                  <i className="ri-twitter-fill"></i>
                </a>
              </li>
              <li className="text-3xl text-pink-500">
                <a href="#">
                  <i className="ri-instagram-fill"></i>
                </a>
              </li>
              <li className="text-3xl text-red-700">
                <a href="#">
                  <i className="ri-youtube-fill"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className=" text-right max-md:text-left max-md:p-2 p-4 font-['spartan']">
              Download The App
            </h3>
            <div className="flex items-center gap-3 pb-5 justify-between ">
              <a href="#">
                <img
                  className="w-40"
                  src="https://www.nifafinearts.com/images/gplay.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="w-40"
                  src="https://www.nifafinearts.com/images/gplay.png"
                  alt=""
                />
              </a>
            </div>
            <span className='font-["spartan"] max-md:text-left text-sm  text-right'>
              © Copyright 2021 NIFA Fine Arts. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default page