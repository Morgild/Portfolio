import { Buttongray } from "./Buttongray";
import { EditIcon } from "./Svg files/EditIcon";
export const Workcard = (props) => {
  return (
    <div className={`flex md:flex-row flex-col md:${props.reverse} p-0 m-0 border-box justify-center items-center md:w-full rounded-xl drop-shadow-md dark:bg-[#374151] dark:from-[#374151] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]`}>
      <div
        className={`md:w-1/2 w-full flex p-12 border-r-[#F3F4F6] dark:bg-[#374151] dark:from-[#374151] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]`}
      >
        <img className="w-full h-full" src="/work.png" />
      </div>
      <div className="flex dark:bg-[#111827] flex-col md:w-1/2 w-full md:h-full bg-white gap-6 p-12 order-${props.order1} ">
        <h3 className="dark:text-[#F9FAFB]">Fiskil</h3>
        <p className="text-[#4B5563] dark:text-[#D1D5DB]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-2 ">
          <Buttongray text="React" />
          <Buttongray text="Nest.js" />
          <Buttongray text="Typescript" />
          <Buttongray text="Nest.js" />
          <Buttongray text="PostgreSQL" />
          <Buttongray text="Tailwindcss" />
          <Buttongray text="Figma" />
          <Buttongray text="Cypress" />
          <Buttongray text="Storybook" />
          <Buttongray text="Git" />
        </div>
        <div className="flex items-center justify-center w-9 h-9">
          <EditIcon/>
        </div>
      </div>
    </div>
  );  
};
