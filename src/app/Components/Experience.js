import { BulletPoint } from "./Bulletpoint";
import { Buttongray } from "./Buttongray";
import { Expcard } from "./Expcard";
export const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center md:px-24 md:py-20 px-4 py-16 bg-[#F9FAFB] gap-12">
      <div className="flex flex-col w-full">
        <Buttongray text="Experience" />
        <p className="text-xl text-[#4B5563] text-center leading-7 font-normal mt-4">Here is a quick summary of my most recent experiences:</p>
      </div>
      <Expcard logo="/upwork.png" position="Sr. Frontend Developer" duration="Nov 2021 - Present" jd=
      "TT"/>
      <Expcard logo="/upwork.png" position="Team Lead" duration="Jul 2017 - Oct 2021" jd="JD"/>
      <Expcard logo="/upwork.png" position="Full Stack Developer" duration="Dec 2015 - May 2017" jd="TEST"/>
    </div>
  );
};
