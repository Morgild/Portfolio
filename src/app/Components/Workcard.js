import { Buttongray } from "./Buttongray";
export const Workcard = (props) => {
  return (
    <div className="flex p-0 m-0 border-box justify-center items-center w-full rounded-xl drop-shadow-md bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] ">
      <div
        className={`w-1/2 flex p-12 border-r-[#F3F4F6] order-${props.order} bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6]`}
      >
        <img src="/work.png" />
      </div>
      <div className="flex flex-col w-1/2 bg-white gap-6 p-12 ">
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
        <div className="flex items-center justify-start w-9 h-9 w-full ">
          <img
            className="flex text-left justify-start w-6 h-6 object-contain"
            src="/Button-edit.png"
          />
        </div>
      </div>
    </div>
  );
};
