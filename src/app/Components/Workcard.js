import { Buttongray } from "./Buttongray";
export const Workcard = (props) => {
  return (
    <div className={`flex md:flex-row flex-col ${props.reverse} p-0 m-0 border-box justify-center items-center md:w-full rounded-xl drop-shadow-md bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]`}>
      <div
        className={`md:w-1/2 w-full flex p-12 border-r-[#F3F4F6] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]`}
      >
        <img className="w-full h-full" src="/work.png" />
      </div>
      <div className="flex flex-col md:w-1/2 w-full bg-white gap-6 p-12 order-${props.order1} ">
        <h3>Fiskil</h3>
        <p className="#4B5563">
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
          <img
            className="flex justify-center items-center w-full h-full"
            src="/Button-edit.png"
          />
        </div>
      </div>
    </div>
  );
};
