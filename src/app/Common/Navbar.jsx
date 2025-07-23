"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  const services = [
    { name: "Float Van Campaign", path: "/service/float-van-campaign" },
    { name: "Market Setup", path: "/service/market-setup" },
    { name: "Digital Marketing", path: "/service/digital-marketing" },
    { name: "Btl Marketing", path: "/service/btl-service" },
    { name: "Corporate Events", path: "/service/corporate-events" },
    { name: "Product Launch", path: "/service/product-launch" },
  ];

  const navItems = [
    { name: "About Us", path: "/about-us" },
    { name: "Our Clients", path: "/our-clients" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShow(false);
        document.body.classList.remove("overflow-hidden");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="border-b border-gray-800 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
      <div>
        <div className="mx-auto container max-w-[1440px] px-[20px] relative">
          <div className="flex items-center justify-between h-[50px] md:h-[100px] z-50 relative">
            {/* Logo */}
            <Link href="/" className="z-50 relative">
              <div className="flex items-center gap-2">
                <img src="/Images/Home/Svg/Footer-Logo.svg" alt="Cynor Logo" />
                <p className="font-Poppins font-semibold text-base md:text-[20px] text-white mb-0">
                  Cynor Media
                </p>
              </div>
            </Link>

            {/* Nav Links */}
            <ul
              className={`${
                show ? "left-0 h-screen bg-black" : "-left-full"
              } fixed top-0 w-full z-40 flex flex-col justify-center items-center gap-10 xl:gap-12 xl:static xl:flex-row xl:h-auto xl:w-auto xl:bg-transparent transition-all duration-500 ease-in-out`}
            >
              {/* Home */}
              <li>
                <Link
                  href="/"
                  onClick={() => setShow(false)}
                  className={`transition-all font-Poppins font-medium text-base leading-[126%] ${
                    pathname === "/"
                      ? "text-[#64cccc]"
                      : "text-white hover:text-[#64cccc]"
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className="relative group">
                <span
                  className={`px-3 py-2 text-sm font-medium text-white font-Poppins cursor-pointer hover:text-[#64cccc] ${
                    pathname.startsWith("/service") ? "text-[#64cccc]" : ""
                  }`}
                >
                  Services
                </span>

                {/* Hover Dropdown */}
                <div className="absolute left-0 top-full mt-2 z-50 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-52 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.path}
                          onClick={() => setShow(false)}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Other Nav Items */}
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    onClick={() => setShow(false)}
                    className={`transition-all font-Poppins font-medium text-base leading-[126%] ${
                      pathname === item.path
                        ? "text-[#64cccc]"
                        : "text-white hover:text-[#64cccc]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="group">
              <button
                className="font-Poppins hidden md:block font-medium text-lg leading-[126%] text-black bg-white py-[12px] px-[15px] rounded-full duration-700 ease-in-out group-hover:text-white group-hover:bg-[#44e6db]"
                onClick={() =>
                  window.open("https://wa.me/+917988709158", "_blank")
                }
              >
                Get in touch
              </button>
            </div>

            {/* Toggle Button */}
            <button
              className="xl:hidden z-50 transition-all duration-300 ease-in-out sm:mr-[25px]"
              onClick={() => setShow(!show)}
              aria-label={show ? "Close menu" : "Open menu"}
            >
              {show ? (
                <div className="z-20 relative">
                  <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                  <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                </div>
              ) : (
                <div className="z-20 relative flex flex-col justify-end items-end">
                  <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6"></span>
                  <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                  <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;