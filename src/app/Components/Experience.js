import { BulletPoint } from "./Bulletpoint";
import { Buttongray } from "./Buttongray";
import { Expcard } from "./Expcard";
export const Experience = () => {
  const expText = [
    {
      logo: "/upwork.png",
      position: "Sr. Frontend Developer",
      duration: "Nov 2021 - Present",
      jd: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      logo: "/upwork.png",
      position: "Team Lead",
      duration: "Jul 2017 - Oct 2021",
      jd: [
        `Sed quis justo ac magna.`,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      logo: "/upwork.png",
      position: "Full Stack Developer",
      duration: "Dec 2015 - May 2017",
      jd: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center md:px-24 md:py-20 px-4 py-16 bg-[#F9FAFB] gap-12 dark:bg-[#111827]">
      <div className="flex flex-col w-full">
        <Buttongray text="Experience" />
        <p className="text-xl text-[#4B5563] text-center leading-7 font-normal mt-4 dark:text-[#D1D5DB]">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      {expText.map((item) => (
        <>
          <Expcard
            logo={item.logo}
            position={item.position}
            duration={item.duration}
            jd={item.jd}
          ></Expcard>
        </>
      ))}
    </div>
  );
};
