import React from 'react'
import "remixicon/fonts/remixicon.css";

const HeaderTop = () => {
  return (
    <div className="font-['spartan'] h-10 max-md:h-28 max-md:p-1  p-2 w-full bg-gradient-to-r from-[#812868] to-[#f954a4] text-white">
      <div className="px-36 max-md:px-2 flex max-md:flex-col items-center justify-between">
        <p className="">Welcome to the National Institute of Fine Arts</p>
        <div className="w-auto  text-sm gap-5 max-md:gap-1 max-md:w-10/12  flex flex-wrap md: items-center justify-around">
          <span>
            <i className="ri-phone-fill"></i> 9555112200
          </span>
          <span>
            <i className="ri-phone-fill"></i> 9810130552
          </span>
          <span className="max-md:text-base">
            <a href="">
              <i className="ri-mail-line"></i> admission@nifafinearts.com
            </a>
          </span>
          <div className="flex text-xl max-md:gap-4  gap-3 ml-3">
            <a href="#">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="#">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#">
              <i className="ri-youtube-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop