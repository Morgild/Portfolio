import { Buttongray } from "./Buttongray";
import { Workcard } from "./Workcard";
export const Work = () => {
  return (
    <div className="flex flex-col px-24 py-20 bg-white gap-12 ">
      <div className="flex flex-col gap-4">
        <Buttongray text="Work" />
        <p className="text-xl text-[#4B5563] text-center leading-7 font-normal mt-4">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <Workcard/>
      <Workcard order='1'/>
      <Workcard/>
    </div>
  );
};
