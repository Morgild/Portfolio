import { Burgermenu } from "./Burgermenu";
import { useState } from "react";

export const Header = (props) => {
  function toggleTheme() {
    props.setIsOnDarkMode((prev) => !prev);
  }
  const [burgerShow, setShow] = useState(false);

  return (
    <header className="flex items-center bg-white md:pl-20 md:pt-4 md:pr-20 dark:bg-[#030712] dark:text-white md:pb-4 p-4 md:fixed md:w-full z-10">
      <div className="flex items-center w-full md:h-full md:pl-8 md:pr-8 place-content-between">
        <div className="cursor-pointer text-[#111827] font-bold text-3xl dark:text-[#F9FAFB] leading-9">
          {"<SS />"}
        </div>
        <ul className="hidden gap-5 items-center dark:bg-black md:flex ">
          <li className="text-base font-medium md:text-[#4B5563] dark:text-[#D1D5DB] cursor-pointer">
            <a className="transition duration-5000 ease-in-out" href="#about">
              About
            </a>
          </li>
          <li className="text-base font-medium md:text-[#4B5563] dark:text-[#D1D5DB] cursor-pointer">
            <a className="" href="#work">
              Work
            </a>
          </li>
          <li className="text-base font-medium md:text-[#4B5563] dark:text-[#D1D5DB] cursor-pointer">
            <a className="" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li className="text-base font-medium md:text-[#4B5563] dark:text-[#D1D5DB] cursor-pointer">
            <a className="" href="#contact">
              Contact
            </a>
          </li>
          <li>
            {!props.darkModeOn ? (
              <img
                onClick={toggleTheme}
                className="w-9 h-9 cursor-pointer"
                src="/icon-light.png"
              />
            ) : (
              <img
                onClick={toggleTheme}
                className="w-9 h-9 cursor-pointer"
                src="/icon-dark.png"
              />
            )}
          </li>
          <li
            className="bg-black cursor-pointer dark:bg-[#F9FAFB] dark:text-[#111827]  text-white px-4 py-1.5 rounded-xl flex items-center text-base font-medium text-[#F9FAFB
]"
          >
            Download CV
          </li>
        </ul>
        <div className="flex justify-center items-center w-9 h-9 md:hidden cursor-pointer">
          <img
            onClick={() => {
              setShow(true);
            }}
            className="w-full h-full"
            src={!props.darkModeOn?("/icon_burger.png"):"/icon_burger_dark.png"}
          />
        </div>
      </div>
      {burgerShow ? (
        <div
          id={"burgerMenu"}
          className={`burgerMenu flex flex-col pl-[55px] w-screen h-full top-0 right-0 bg-gray-300 z-20 fixed dark:bg-white`}
        >
          <div className="bg-white w-full h-full dark:bg-[#030712]">
            <div className="flex justify-between bg-white items-center p-4 border-b border-[#F3F4F6] dark:border-[#1F2937] dark:bg-[#030712] ">
              <div className="cursor-pointer text-[#111827] dark:text-[#F9FAFB] p-4 font-bold text-2xl leading-8 ">
                {"<SS />"}
              </div>
              <div className="w-9 h-9">
                <img
                  onClick={() => {
                    setShow(false);
                  }}
                  className="cursor-pointer"
                  src={!props.darkModeOn?("/icon-x.png"):"/icon-x_dark.png"}
                />
              </div>
            </div>
            <ul className="gap-4 p-4 items-start justify-around flex flex-col bg-white border-b border-[#F3F4F6] dark:border-[#1F2937] dark:bg-[#030712]">
              <li className="text-base font-medium text-[#4B5563] cursor-pointer">
                <a
                  className="dark:text-[#D1D5DB]"
                  onClick={() => {
                    setShow(false);
                  }}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="text-base font-medium text-[#4B5563] cursor-pointer">
                <a
                  className="dark:text-[#D1D5DB]"
                  onClick={() => {
                    setShow(false);
                  }}
                  href="#work"
                >
                  Work
                </a>
              </li>
              <li className="text-base font-medium text-[#4B5563] cursor-pointer">
                <a
                  className="dark:text-[#D1D5DB]"
                  onClick={() => {
                    setShow(false);
                  }}
                  href="#testimonials"
                >
                  Testimonials
                </a>
              </li>
              <li className="text-base font-medium text-[#4B5563] cursor-pointer">
                <a
                  className="dark:text-[#D1D5DB]"
                  onClick={() => {
                    setShow(false);
                  }}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="p-4 gap-4 flex flex-col">
              <li
                onClick={toggleTheme}
                className="flex dark:bg-black items-center justify-between w-full cursor-pointer"
              >
                <p className="text-base font-medium text-[#4B5563] dark:text-[#D1D5DB] cursor-pointer">
                  Switch Theme
                </p>
                {!props.darkModeOn ? (
                  <img
                    className="w-9 h-9 cursor-pointer"
                    src="/icon-light.png"
                  />
                ) : (
                  <img
                    className="w-9 h-9 cursor-pointer"
                    src="/icon-dark.png"
                  />
                )}
              </li>
              <li
                className="bg-black dark:bg-[#F9FAFB] flex justify-center text-center m-auto cursor-pointer display-block text-center w-full text-white px-4 py-1.5 rounded-xl flex items-center text-base font-medium text-[#F9FAFB
]"
              >
                <p className="dark:text-[#111827]">Download CV</p>
              </li>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};
