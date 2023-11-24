import { Buttongray } from "./Buttongray";
import { EditIcon } from "./Svg files/EditIcon";
export const Workcard = (props) => {
  const buttonText = [
    "React",
    "Nest.js",
    "Typescript",
    "Nest.js",
    "PostgreSQL",
    "Tailwindcss",
    "Figma",
    "Figma",
    "Cypress",
    "Storybook",
    "Git",
  ];
  return (
    <div
      className={`flex md:flex-row flex-col md:${props.reverse}  md:items-stretch p-0 m-0 border-box justify-center items-center md:w-full rounded-xl overflow-hidden drop-shadow-md dark:bg-[#374151] dark:from-[#374151] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]`}
    >
      <div
        className={`md:w-1/2 w-full md:items-center flex p-12  border-r-[#F3F4F6] dark:bg-[#374151] dark:from-[#374151] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]`}
      >
        <img className="w-full" src="/work.png" />
      </div>
      <div className="flex dark:bg-[#111827] flex-col md:w-1/2 w-full bg-white gap-6 p-12 order-${props.order1} ">
        <h3 className="dark:text-[#F9FAFB]">Fiskil</h3>
        <p className="text-[#4B5563] dark:text-[#D1D5DB]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div  className="flex flex-wrap gap-2 ">
          {buttonText.map((item)=>(
            <Buttongray text={item} />
          ))}
        </div>
        <div className="flex items-center justify-center w-9 h-9">
          <EditIcon />
        </div>
      </div>
    </div>
  );
};
