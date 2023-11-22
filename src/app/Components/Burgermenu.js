import { useState } from "react";
export const Burgermenu = (props) => {
  const [burgerShow, setShow] = useState(true);
  return (
    <div
      id={"burgerMenu"}
      className={`burgerMenu ${props.visible} flex flex-col pl-[55px] w-screen h-full top-0 right-0 bg-gray-300 z-20 fixed`}
    >
      <div className="bg-white w-full h-full">
        <div className="flex justify-between bg-white items-center p-4 border-b border-[#F3F4F6] ">
          <div className="cursor-pointer text-[#111827] p-4 font-bold text-2xl leading-8">
            {"<SS />"}
          </div>
          <div className="w-9 h-9">
            <img
              onClick={() => {
                setShow(false);
                console.log("T",burgerShow)
              }}
              className="cursor-pointer"
              src="/icon-x.png"
            />
          </div>
        </div>
        <ul className="gap-4 p-4 items-start justify-around flex flex-col bg-white border-b border-[#F3F4F6]">
          <li className="text-base font-medium text-[#4B5563] cursor-pointer">
            About
          </li>
          <li className="text-base font-medium text-[#4B5563] cursor-pointer">
            Work
          </li>
          <li className="text-base font-medium text-[#4B5563] cursor-pointer">
            Testimonials
          </li>
          <li className="text-base font-medium text-[#4B5563] cursor-pointer">
            Contact
          </li>
        </ul>
        <div className="p-4 gap-4 flex flex-col">
          <li className="flex items-center justify-between w-full cursor-pointer">
            <p className="text-base font-medium text-[#4B5563] cursor-pointer">
              Switch Theme
            </p>
            <img className="w-9 h-9 cursor-pointer" src="/icon.png" />
          </li>
          <li
            className="bg-black flex justify-center text-center m-auto cursor-pointer display-block text-center w-full text-white px-4 py-1.5 rounded-xl flex items-center text-base font-medium text-[#F9FAFB
]"
          >
            <p>Download CV</p>
          </li>
        </div>
      </div>
    </div>
  );
};
