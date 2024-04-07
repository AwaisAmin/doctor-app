"use client";
import { useEffect, useState } from "react";
import Button from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-[#52B497] w-full">
        <nav className="lg:px-[150px] md:px-[30px] sm:px-[10px] pt-[30px]">
          <ul className="flex justify-between items-center">
            <Link href="#">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={105}
                height={69}
              />
            </Link>
            {/* Hamburger menu icon for mobile devices */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {showMenu ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
            {/* Regular navigation links */}
            <div
              className={`lg:flex gap-[50px] ${
                showMenu
                  ? "flex flex-col gap-[20px] absolute top-[130px] lg:static bg-[#52B497] lg:bg-transparent w-full"
                  : "hidden"
              }`}
            >
              <Link
                href="#"
                className="text-white flex items-center rounded-md gap-[6px]"
              >
                Are you a health service provider?
                <span>
                  <Image
                    src="/images/icons/link-external-01.png"
                    alt="external"
                    width={15}
                    height={15}
                  />
                </span>
              </Link>
              <Link href="#" className="text-white">
                <Button className="flex justify-center items-center text-[#52B497] py-[5px] px-[10px] bg-white rounded-md gap-[6px]">
                  Log in{" "}
                  <Image
                    src="/images/icons/log-in-01.png"
                    alt="login"
                    width={15}
                    height={15}
                    className="text-white mx-auto"
                  />
                </Button>
              </Link>
              <Link href="#">
                <Button className="flex justify-center items-center text-[#52B497] py-[5px] px-[10px] bg-white rounded-md gap-[6px]">
                  Sign up{" "}
                  <Image
                    src="/images/icons/edit-05.png"
                    alt="signup"
                    width={15}
                    height={15}
                  />
                </Button>
              </Link>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
