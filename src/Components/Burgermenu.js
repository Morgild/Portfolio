import { useDark } from "@/app/page";
export const Burgermenu = (props) => {
  const {isOnDarkMode,setIsOnDarkMode} = useDark();
  return (
    <div
      id={"burgerMenu"}
      className={`transition-all ease-in-out burgerMenu flex flex-col duration-1000 pl-[55px] w-screen h-full bg-gray-300  top-0 right-0   z-20 fixed dark:bg-white ${
        props.drawerShow ? "right-[0%]" : "right-[-200%] bg-white "
      }`}
    >
      <div className="bg-white w-full h-full dark:bg-[#030712]">
        <div className="flex justify-between bg-white items-center p-4 border-b border-[#F3F4F6] dark:border-[#1F2937] dark:bg-[#030712] ">
          <div className="cursor-pointer text-[#111827] dark:text-[#F9FAFB] p-4 font-bold text-2xl leading-8 ">
            {"<SS />"}
          </div>
          <div className="w-9 h-9">
            <img
              onClick={props.drawer}
              className="cursor-pointer"
              src={!isOnDarkMode? "/icon-x.png" : "/icon-x_dark.png"}
            />
          </div>
        </div>
        <ul className="gap-4 p-4 items-start justify-around flex flex-col bg-white border-b border-[#F3F4F6] dark:border-[#1F2937] dark:bg-[#030712]">
          {props.menuList.map((item) => (
            <li key={`${item}1`}
              onClick={() => {
                document
                  .getElementById(`${item}`)
                  .scrollIntoView({ behavior: props.drawerShow ? "instant":"smooth" });
                  {props.drawer()}   
              }}
              className="text-base font-medium text-[#4B5563] dark:text-[#D1D5DB] cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="p-4 gap-4 flex flex-col">
          <li
            onClick={props.toggleTheme}
            className="flex dark:bg-black items-center justify-between w-full cursor-pointer"
          >
            <p className="text-base font-medium text-[#4B5563] dark:text-[#D1D5DB] cursor-pointer">
              Switch Theme
            </p>
            {!isOnDarkMode ? (
              <img className="w-9 h-9 cursor-pointer" src="/icon-light.png" />
            ) : (
              <img className="w-9 h-9 cursor-pointer" src="/icon-dark.png" />
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
  );
};
