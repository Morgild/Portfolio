import { Buttongray } from "./Buttongray";
import { Workcard } from "./Workcard";
export const Work = () => {
  return (
    <div  id='Work' className="flex flex-col md:px-24 md:py-20 px-4 py-16 bg-white gap-12 dark:bg-[#030712] ">
      <div className="flex flex-col gap-4">
        <Buttongray text="Work" />
        <p className="text-xl text-[#4B5563] text-center leading-7 font-normal mt-4 dark:text-[#D1D5DB]">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <Workcard/>
      <Workcard reverse="flex-row-reverse"/>
      <Workcard/>
    </div>
  );
};
