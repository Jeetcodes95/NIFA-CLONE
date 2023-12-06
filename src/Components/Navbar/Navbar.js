import React from "react";
import style from "./style.module.css";
import Link from "next/link";

const Navbar = () => {
  const menuItems = [
    "Home",
    "About",
    "Cources",
    "Activites",
    "Admission",
    "Art Gallery",
    "Franchise",
    "Online Classes",
    "Videos",
    "Pay Fee",
    "Contact",
  ];

  return (
    <>
      <div className="mx-auto max-md:flex-col flex justify-center items-center  ">
        <div className="w-32">
          <Link href='/'>
            <img
              src="https://www.nifafinearts.com/images/nifa-new-logo.png"
              alt="Nifa-Logo"
            />
          </Link>
        </div>
        <div className="max-md:hidden flex justify-center items-center px-12">
          <div className="flex items-center justify-center gap-4">
            {menuItems.map((title, index) => (
              <Link key={index} href="#" className={style.menu}>
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
