export const Header = () => {
  return (
    <header className="flex items-center bg-white pl-20 pt-4 pr-20 pb-4">
      <div className="flex items-center w-full pl-8 pr-8 place-content-between">
        <div className="cursor-pointer text-[#111827] font-bold text-3xl leading-9">
          {"<SS />"}
        </div>
        <ul className="flex gap-5 items-center">
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
          <li>
            <img className="w-9 h-9 cursor-pointer" src="/icon.png" />
          </li>
          <li
            className="bg-black cursor-pointer text-white px-4 py-1.5 rounded-xl flex items-center text-base font-medium text-[#F9FAFB
]"
          >
            Download CV
          </li>
        </ul>
      </div>
    </header>
  );
};
