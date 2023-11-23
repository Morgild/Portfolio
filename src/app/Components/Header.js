import { Burgermenu } from "./Burgermenu";
import { useState } from "react";
const menuList = ["About", "Work", "Testimonials", "Contact"];
export const Header = (props) => {
  function toggleTheme() {
    props.setIsOnDarkMode((prev) => !prev);
  }
  function drawer() {
    setShow((prev) => !prev);
  }
  const [drawerShow, setShow] = useState(false);

  return (
    <header className="flex items-center transition duration-1000 bg-white md:pl-20 md:pt-4 md:pr-20 dark:bg-[#030712] dark:text-white md:pb-4 p-4 md:fixed md:w-full z-10 max-w-[1536px]">
      <div className="flex items-center w-full md:h-full md:pl-8 md:pr-8 place-content-between">
        <div className="cursor-pointer text-[#111827] font-bold text-3xl dark:text-[#F9FAFB] leading-9">
          {"<SS />"}
        </div>
        <ul className="hidden gap-5 items-center dark:bg-black md:flex ">
          {menuList.map((item) => (
            <li
              key={item}
              className="text-base font-medium text-[#4B5563] dark:text-[#D1D5DB] cursor-pointer"
            >
              {item}
            </li>
          ))}

          <li>
            <img
              onClick={toggleTheme}
              className="w-9 h-9 cursor-pointer transition-all duration-1000"
              src={!props.darkModeOn ? "/icon-light.png" : "/icon-dark.png"}
            />
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
            className=" sw-full h-full"
            src={
              !props.darkModeOn ? "/icon_burger.png" : "/icon_burger_dark.png"
            }
          />
        </div>
      </div>
      <Burgermenu
        setShow={setShow}
        drawerShow={drawerShow}
        toggleTheme={toggleTheme}
        drawer={drawer}
        menuList={menuList}
        darkModeOn={props.darkModeOn}
      />
    </header>
  );
};
